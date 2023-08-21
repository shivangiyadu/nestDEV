import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto/user.dto';
import { CreateUserDto } from 'src/user1/dto/user1.dto';

@Injectable()
export class UserService {
    createUser1(createuserdto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }
    constructor(private readonly prismaService:PrismaService){}

    async createUser(userDto:UserDto):Promise<any>{
        return this.prismaService.user.create({           
           data:userDto
           
        } ) ;  
        
    }

    async getUserPosts(id:number){
        return this.prismaService.user.findMany({
            where:{
                id:id
            },
                include:{
                    posts:true
                }
        })
    }
}
