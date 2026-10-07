import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() registerData: RegisterDto) {
        return this.authService.register(registerData);
    }

    @Post('login')
    login(@Body() loginData: LoginDto) {
        return this.authService.login(loginData);
    }
}