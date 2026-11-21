import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import type { ContactInput } from './contacts.controller';

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService) { }

    /** Stores a checked submission. There is deliberately no method that lists them. */
    async create(data: ContactInput) {
        return this.prisma.contact.create({
            data: { name: data.name, email: data.email, company: data.company, summary: data.summary },
        });
    }
}
