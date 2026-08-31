import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { addMemberDto } from './dto/add-member.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('')
  getTeam(){
    return this.teamService.getTeam();
  }

  @Post('')
  addMember(@Body() MemberData: addMemberDto){
    return this.teamService.addMember(MemberData);
  }
}
