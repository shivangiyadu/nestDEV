import { Optional } from "@nestjs/common";
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsSemVer, IsString, IsTimeZone } from "class-validator"

export class CustomerDto{
    @IsNotEmpty()
    @IsString()
    user_name :string;

     @IsNotEmpty()
     @IsNumber()
    user_ph_no :number;

     @IsNotEmpty()
    @IsString()
    user_email : string;

     @IsNumber()
    @IsNotEmpty()
    user_house_no:number;

    @IsNotEmpty()
    @IsString()
    user_city:string;

    @IsNumber()
    price:number;

    @Optional()
    @IsNumber()
    no_items:number;

    @Optional()
    discount :number;

     @IsNotEmpty()
     @Optional()
    @IsDate()
    order_date :number;

    @IsNotEmpty()
    @Optional()
    @IsTimeZone()
    order_time:number;
 
}
export class Login {
    
    @IsNotEmpty()
    @IsEmail()
    user_email :string
}