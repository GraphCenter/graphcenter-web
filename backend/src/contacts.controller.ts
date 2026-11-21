import { BadRequestException, Body, Controller, HttpCode, HttpException, HttpStatus, Ip, Post, Req } from '@nestjs/common';
import { ContactsService } from './contacts.service';

/**
 * The public contact form's only route.
 *
 * There used to be a `GET /contacts` here too, with no authentication and
 * any-origin CORS, which returned every lead ever submitted (names, emails,
 * companies, what they asked about). There is no listing route now; leads
 * are read from the database by whoever runs it.
 *
 * The body used to go to Prisma as it came. Now only the four fields are
 * taken, each checked, with a honeypot field and a per-address limit to keep
 * scripted spam out.
 */
export interface ContactInput {
    name: string;
    email: string;
    company: string;
    summary: string;
}

const LIMITS = { name: 120, email: 200, company: 160, summary: 4000 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** The four fields, trimmed and checked, or the reason they are not acceptable. */
export function parseContact(body: unknown): ContactInput | string {
    const b = (body ?? {}) as Record<string, unknown>;
    // Hidden from people by the form; bots fill every field they find.
    if (typeof b.website === 'string' && b.website.trim()) return 'Rejected';
    const out: Record<string, string> = {};
    for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
        const value = typeof b[key] === 'string' ? (b[key] as string).trim() : '';
        if (!value && key !== 'company') return `${key} is required`;
        if (value.length > LIMITS[key]) return `${key} is too long`;
        out[key] = value;
    }
    if (!EMAIL.test(out.email)) return 'email is not a valid address';
    return out as unknown as ContactInput;
}

const WINDOW_MS = 10 * 60_000;
const PER_WINDOW = 5;
const recent = new Map<string, number[]>();

/** At most PER_WINDOW submissions per address per window (this process's memory). */
export function allowSubmission(key: string, now = Date.now()): boolean {
    const kept = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
    if (kept.length >= PER_WINDOW) {
        recent.set(key, kept);
        return false;
    }
    kept.push(now);
    recent.set(key, kept);
    if (recent.size > 10_000) recent.clear();
    return true;
}

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() body: unknown, @Req() req: any, @Ip() ip: string) {
        const vercel = req?.headers?.['x-vercel-forwarded-for'];
        const who = (process.env.VERCEL && typeof vercel === 'string' ? vercel.split(',')[0].trim() : '') || ip || 'unknown';
        if (!allowSubmission(who)) {
            throw new HttpException('Too many messages from this address. Try again later.', HttpStatus.TOO_MANY_REQUESTS);
        }
        const contact = parseContact(body);
        if (typeof contact === 'string') throw new BadRequestException(contact);
        await this.contactsService.create(contact);
        // Nothing is echoed back: the caller already has what it sent.
        return { received: true };
    }
}
