import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { PostModule } from './post/post.module';
import { User1Module } from './user1/user1.module';
import { AddressModule } from './address/address.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UserModule, PostModule, User1Module, AddressModule, CustomerModule,AuthModule],
  
})
export class AppModule {}
