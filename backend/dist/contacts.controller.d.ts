import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: Prisma.ContactCreateInput): Promise<{
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
