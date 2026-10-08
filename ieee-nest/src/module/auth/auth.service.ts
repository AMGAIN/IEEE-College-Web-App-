import { Injectable, ConflictException, UnauthorizedException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from '../user/schemas/user.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) {}

    async register(registerData: RegisterDto) {
        const existingUser = await this.userModel.findOne({
            email: registerData.email,
        });

        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(
            registerData.password,
            10,
        );

        const user = await this.userModel.create({
            name: registerData.name,
            email: registerData.email,
            password: hashedPassword,
            role: 'admin',
        });

        return {
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };
    }

    async login(loginData: LoginDto) {
        const user = await this.userModel.findOne({
            email: loginData.email,
        });

        if (!user) {
            throw new UnauthorizedException(
                'Invalid email or password',
            );
        }

        const passwordMatches = await bcrypt.compare(
            loginData.password,
            user.password,
        );

        if (!passwordMatches) {
            throw new UnauthorizedException(
                'Invalid email or password',
            );
        }

        return {
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };
    }
}