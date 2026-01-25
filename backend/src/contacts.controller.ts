import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) { }

    @Post()
    async create(@Body() createContactDto: Prisma.ContactCreateInput) {
        return this.contactsService.create(createContactDto);
    }

    @Get()
    async findAll() {
        return this.contactsService.findAll();
    }
}
