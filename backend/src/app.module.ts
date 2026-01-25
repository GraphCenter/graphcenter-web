import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactsController],
  providers: [AppService, PrismaService, ContactsService],
})
export class AppModule { }
