import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class PostDto{
    @IsOptional()
    @IsString()
    title:string
     
    @IsString()  
    @IsOptional()  
    description?:string

    @IsNumber()
    @IsNotEmpty()   
    author_id?: number
}