import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { ChangePasswordDto, SignupDto } from "./dto/auth.dto";
//import { threadId } from "worker_threads";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService{
    constructor(private readonly prisma:PrismaService,
                private readonly jwtSer:JwtService,){}
    async newuser(data:SignupDto):Promise <any>{
        let flag=await this.prisma.users.findFirst({where:{email:data.email}})
        if (flag==null){
        const user = await this.prisma.users.create({data:{
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            address:data.address,
            ph_no:data.ph_no,
            password:data.password,
        }
        });

        const token = await this.jwtSer.sign(user)
        // const decoded = await this.jwtSer.verify(token) 

        return {data:{
            user:user,token :token,
            // decoded:decoded
        }}
        }
       
        else {
            throw new HttpException("User already exits",400)    
            };
        }

    async login(data):Promise<any>{
        const user=await this.prisma.users.findFirst({
            where:{
                email:data.email,
                password:data.password
            }
        });
        if(user!==null){
            const token=this.jwtSer.sign(user,{secret:process.env.JWT_SECRET});
            console.log(token)
            const decoded_token=this.jwtSer.verify(token,{secret:process.env.JWT_SECRET})
            console.log(decoded_token)
            user["token"]=token
            console.log(user,"user service")
            return user
        }
        else 
        {
            throw new HttpException('user not found',404)
        }
    }
    async ahfhdf():Promise<any>{
        console.log("fsafsf")

    }
    async changePassword(email:string,newpassword:string,confirm_Password:string):Promise<any>{
        const hashedPassword= await bcrypt.hash(newpassword,10);
         return await this.prisma.users.update({
            where:{email:email,
            },
            data:{
                newpassword:hashedPassword,
            },
         });
    }
    
}
    


   
