import { Body, Controller, Post ,Get, Put, Param, Patch,Request} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ChangePasswordDto, LoginDto, SignupDto, Update_PH_NO } from "./dto/auth.dto";


@Controller('auth')
export class AuthController {
    constructor(private readonly authservice:AuthService){}
    @Post('signup')
    async newuser(@Body() data:SignupDto):Promise<any>{
        return await this.authservice.newuser(data)
    }
    
    @Post('login')
    async Login(@Body() data:LoginDto):Promise <any>{
        return await this.authservice.login(data);
    }

    @Patch('change-pass')
    async changePassword(@Body()email:string,
                       @Body()newpassword:string,
                       @Body()confirm_Password:string):Promise <any>{
                       
                        if(newpassword!==confirm_Password){
                            throw new Error("new pass and confirm password donot match")
                        }

                        return await this.authservice.changePassword(email,newpassword,confirm_Password), {message:'password chnaged successfully'};
                          }     
    }