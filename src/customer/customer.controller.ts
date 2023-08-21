import { Body, Controller, Get ,Post} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto, Login } from './dto/c.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly cs:CustomerService) {}

    @Get('get')
    customerDetails():Promise <any>
    {
        return this.cs.customerDetails();
    }
    @Post("put-details")
    get_details(@Body() cs:CustomerDto):Promise <any>
    {
        return this.cs.get_details(cs);
    }

    @Post('log-in')
    user_login(@Body()body:Login):Promise <any>
    {
        return this.cs.user_login(body);
    }

}

