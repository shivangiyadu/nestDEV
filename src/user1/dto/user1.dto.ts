import { IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword, Length } from "class-validator";

export class CreateUserDto
{
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsEmail()
    @IsNotEmpty()
    email:string;

   
    @IsNotEmpty()
    @IsString()
  //  @Length(3,12,{message: 'Passowrd has to be at between 3 and 10 characters'})
    pass:string;

    @IsNotEmpty()
    @IsNumber()
    ph_no:number;


}


export class SignUpDto{
    @IsNotEmpty()
    @IsEmail()
    email:string
    @IsNotEmpty()
    @IsString()
    pass:string
}