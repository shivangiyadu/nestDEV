import { Body, Controller, Delete, Param, Post, Put ,Get} from '@nestjs/common';
import { CreateUserDto, SignUpDto } from './dto/user1.dto';
// import { UserService } from 'src/user/user.service';
import { User1Service } from './user1.service';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Controller('user1')
export class User1Controller {
    constructor(private readonly userservice:User1Service) {}

@Get()
 getall():Promise<any>
{
    return this.userservice.getall();
}

@Post('sign-up')
sign_up(@Body() createuserdto:CreateUserDto):Promise<any>
{
    return this.userservice.sign_up(createuserdto);

}

@Post('sign-in')
   sign_in(@Body()body:SignUpDto):Promise<any>
{ 
    console.log(body)
   return this.userservice.sign_in(body);
  
}

@Put(':id')
updateUser1(@Param('id') id :string,@Body()createuserdto:CreateUserDto){
    return this.userservice.updateUser1(Number(id),createuserdto)
}
@Delete(':id')
deleteUser(@Param('id')id:number){
    return this.userservice.deleteUser(id);
     }

}
