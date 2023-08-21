import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class AddressUserDto{

@IsInt()
userid: number;

@IsNotEmpty()
@IsInt()
house_no : number ;


@IsNotEmpty()
@IsInt()
lane_no : number ;


@IsNotEmpty()
@IsString()
city : string;



}