import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createMemberDto } from './dto/create-member.dto';
import { Member, MemberDocument } from './schemas/team.schema';
import { updateMemberDto } from './dto/update-member.dto';

@Injectable()
export class TeamService {
    constructor(
        @InjectModel(Member.name)
        private memberModel: Model<MemberDocument>
    ) { }

    async getTeam() {
        return this.memberModel.find().exec();
    }

    async addMember(
        memberData: createMemberDto,
        file: Express.Multer.File
    ) {
        const newMember = new this.memberModel({
            ...memberData,
            image: file?.path  // ← Simplified, just like news
        });
        return newMember.save();
    }

    async updateMember(id: string, memberData: updateMemberDto) {
        const changedMember = this.memberModel.findByIdAndUpdate(id, memberData, { new: true }).exec();
        return changedMember;
    }

    async deleteMember(id: string) {
        const deletedMember = this.memberModel.findByIdAndDelete(id).exec();
        return deletedMember;
    }
}