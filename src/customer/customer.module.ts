import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CustomerController],
  providers: [PrismaService,CustomerService]
})
export class CustomerModule {}
