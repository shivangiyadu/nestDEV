import { Optional } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";


export class SignupDto{
    @IsString()
    @IsNotEmpty({message:"Please enter the First name "})
    public first_name : string;
    
    @IsString()
    @IsNotEmpty({message:"Please enter the Last name "})
     last_name : string;

    @IsEmail()
    @IsNotEmpty({message:"Please enter the email "})
     email: string;

    @IsString()
    @IsNotEmpty({message:"Please enter the address "})
     address: string;

    @IsPhoneNumber()
    @IsNotEmpty({message:"Please enter the phone number "})
    ph_no: string;

    @IsNotEmpty({message:"Please enter the password"})
     password : string;
}
export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
  }
  export class Update_PH_NO{
    @IsNotEmpty()
    @IsPhoneNumber()
    ph_no:string;
  }

  export class ChangePasswordDto{
    @IsNotEmpty()
    @IsEmail()
    email:string;

  @IsNotEmpty()
  @IsString()
  newpassword:string;

  @IsNotEmpty()
  @IsString()
  confirmpass:string;
  }