import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { PrismaService } from "src/prisma.service";
import { AuthService } from "./auth.service";




@Module({
    imports:[JwtModule.register({
         secret:process.env.SECRET_KEY
    })],
    controllers:[AuthController],
    providers:[PrismaService,AuthService]
})

export class AuthModule {}