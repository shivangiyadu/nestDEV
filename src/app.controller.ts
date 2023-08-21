import { Controller, Delete, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';


@Controller()
export class AppController {
 // constructor(private readonly appService: AppService, private authService: ) {}



  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
   async login (@Req() req) {
 //   return this.authService.login(req.user);

    //@UseGuards(AuthGuard('jwt'))
   // @Get('test')
   // async data(){
        return 'sccuess';
    }
}
