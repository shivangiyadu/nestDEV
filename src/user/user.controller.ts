import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ParamDto, UserDto } from './user.dto/user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}
    @Post("create-user")
    create_New_User(@Body()userDto:UserDto){
        try {
            return this.userService.createUser(userDto)
        }
          catch(error){
            throw error
          }
    }
   @Get("/get-user-post")
   getUserposts(@Query()user:ParamDto){
    return this.userService.getUserPosts(user.id)
   }
}
