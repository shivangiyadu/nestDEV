import { Module } from '@nestjs/common';
import { User1Controller } from './user1.controller';
import { User1Service } from './user1.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [User1Controller],
  providers: [User1Service,PrismaService]
})
export class User1Module {}
