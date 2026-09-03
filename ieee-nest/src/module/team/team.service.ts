import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createMemberDto } from './dto/create-member.dto';
import { Member, MemberDocument } from './schemas/team.schema';

@Injectable()
export class TeamService {
    constructor(
        @InjectModel(Member.name)
        private memberModel: Model<MemberDocument>
    ) { }

    async getTeam() {
        return this.memberModel.find().exec();
    }

    async addMember(memberData: createMemberDto) {
        const newMember = new this.memberModel(memberData);
        return newMember.save();
    }
}
