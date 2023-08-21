import { IsEmail, IsOptional, IsString } from "class-validator" 

export class UserDto {
     @IsOptional()
    @IsString()
    name: string

    @IsEmail()
    email:string
}

    export class ParamDto{
        @IsString()
        id:number
    }
 
