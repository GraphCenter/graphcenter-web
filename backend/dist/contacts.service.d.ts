import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ContactCreateInput): Promise<{
        name: string;
        email: string;
        company: string;
        summary: string;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        email: string;
        company: string;
        summary: string;
        createdAt: Date;
        id: number;
    }[]>;
}
