import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { createMemberDto } from './dto/create-member.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get('')
  getTeam() {
    return this.teamService.getTeam();
  }

  @Post('')
  addMember(@Body() MemberData: createMemberDto) {
    return this.teamService.addMember(MemberData);
  }
}
