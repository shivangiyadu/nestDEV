import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto, SignUpDto } from './dto/user1.dto';


@Injectable()
export class User1Service {
constructor(private readonly prismaservice:PrismaService) {} 

async getall():Promise<any>{
    const user1=await this.prismaservice.user1.findMany({})
    return user1;
}


async sign_up(createuserdto:CreateUserDto):Promise<any>{  

    const user =await this.prismaservice.user1.create({
        data:createuserdto,
       });
       return user;
}

async sign_in(body:SignUpDto):Promise<any>
{
    console.log(body.email);
    console.log(body.pass);
    const user = await this.prismaservice.user1.findFirst({
        where:{
            email:body.email,
            pass:body.pass 
        },
        select:{
            add_S:
             {
             where:{
                city:"delhi"
             },
             select:{
                city:true
             }
             }
                }
            
            }
        )
  if(user != null){

    return {message:"suceessfull",details:user}
}
  
  else{
    return "user not found ";
  }
}
    

async updateUser1(id:number, createuserdto:CreateUserDto):Promise<any>{
    return await this.prismaservice.user1.update({
        where:{id:id},data:createuserdto
    })
}
async deleteUser(id:number):Promise<any>{
    return await  this.prismaservice.user1.delete({
        where:{id}
    });
}


}

