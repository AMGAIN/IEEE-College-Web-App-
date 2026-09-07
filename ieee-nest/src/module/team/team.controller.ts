import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { createMemberDto } from './dto/create-member.dto';
import { updateMemberDto } from './dto/update-member.dto';
import { ApiOperation, ApiConsumes } from '@nestjs/swagger';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all Team Members'})
  getTeam() {
    return this.teamService.getTeam();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new Team Members'})
  @ApiConsumes('multipart/form-data')
  addMember(@Body() memberData: createMemberDto) {
    return this.teamService.addMember(memberData);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing Team Members'})
  @ApiConsumes('multipart/form-data')
  updateMember(
    @Param('id') id: string,
    @Body() memberData: updateMemberDto
  ) {
    return this.teamService.updateMember(id, memberData)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Team Members'})
  deleteMember(@Param('id') id: string){
    return this.teamService.deleteMember(id);
  }
}
