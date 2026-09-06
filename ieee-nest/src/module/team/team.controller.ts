import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { createMemberDto } from './dto/create-member.dto';
import { updateMemberDto } from './dto/update-member.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get('')
  getTeam() {
    return this.teamService.getTeam();
  }

  @Post('')
  addMember(@Body() memberData: createMemberDto) {
    return this.teamService.addMember(memberData);
  }

  @Put(':id')
  updateMember(
    @Param('id') id: string,
    @Body() memberData: updateMemberDto
  ) {
    return this.teamService.updateMember(id, memberData)
  }

  @Delete(':id')
  deleteMember(@Param('id') id: string){
    return this.teamService.deleteMember(id);
  }
}
