import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.ContactCreateInput) {
        return this.prisma.contact.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.contact.findMany();
    }
}
