import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CustomerDto, Login } from './dto/c.dto';

@Injectable()
export class CustomerService {
    constructor(private readonly ps:PrismaService) {}
        async customerDetails():Promise<any>
        {
            const customer=await this.ps.customer_details.findMany()
            return customer;
        }
        async get_details(cs:CustomerDto):Promise <any>
        {
            const details=await this.ps.customer_details.create({
              
                data:cs,
            });
            return details;
        }
        async user_login(body:Login):Promise <any>
        {
           console.log(body.user_email);
          // const delivery_date=new Date().toString();
           const userdetail=await this.ps.customer_details.findFirst({

            where:{user_email:body.user_email
               },
            
           })
           if(userdetail!=null){
            return {message:"hey!" ,detail:userdetail}
           }
           else {
            return "user not found";
           }
        }
           
    }
