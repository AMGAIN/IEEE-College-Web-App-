import { Injectable } from '@nestjs/common';
import { UserDocument, User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) { }

    async getUser(){
        return this.userModel.find().exec();
    }
}
