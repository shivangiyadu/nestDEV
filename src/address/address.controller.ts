import { Controller,Post,Body, Param, Patch, Delete, Get } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressUserDto } from './dto/address.dto';

@Controller('address')
export class AddressController {
    constructor(private readonly addressservice:AddressService){}
//AddressDto BAnao

    @Get('/all-users')
    getall():Promise<any>
    {
        return this.addressservice.getall()
    }

    @Post('/my-address')
    createUser1(@Body()data:AddressUserDto):Promise<any>{
        return this.addressservice.createUser1(data)
    }

    @Patch(':id')
    updateUser1(@Param('id') id :number,@Body()addressusedto:AddressUserDto)
    {
        return this.addressservice.updateUser1(addressusedto,id)
    }
    @Delete(':id')
    deleteUser(@Param('id')id : number ){
        return this.addressservice.deleteUser(id);
    }

// get ka banao saara data dikhane ke liye // kya kya likhu?
}
