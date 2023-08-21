import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AddressUserDto } from './dto/address.dto';

@Injectable()
export class AddressService {
    constructor(private readonly prismaservice:PrismaService) {}
      async createUser1(addressuserdto:AddressUserDto){
        const address = await this.prismaservice.address.create({
            data:{
       userid:addressuserdto.userid,
       house_no:addressuserdto.house_no,
       lane_no:addressuserdto.lane_no,
       city:addressuserdto.city
            }
        })
        return address

}
   async updateUser1(addressuserdto:AddressUserDto,id:number):Promise<any>
   {
     return this.prismaservice.address.update({
        where:{
            id:id
        },
            data:addressuserdto     
     });
   }

   async deleteUser(id:number):Promise<any>
   {
    return this.prismaservice.address.delete({
        where:{id}
    })
   }
   async getall():Promise<any>{
    const address = await this.prismaservice.address.findMany({})
    return address    
}

}
