import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Member, MemberSchema } from './schemas/team.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Member.name, schema: MemberSchema}
    ])
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
