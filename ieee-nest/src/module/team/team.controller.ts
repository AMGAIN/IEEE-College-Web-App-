import { Controller, Get, Post, Body, Put, Param, Delete,UploadedFile, UseInterceptors } from '@nestjs/common';
import { TeamService } from './team.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { createMemberDto } from './dto/create-member.dto';
import { updateMemberDto } from './dto/update-member.dto';
import { ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all Team Members' })
  getTeam() {
    return this.teamService.getTeam();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new Team Members' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        position: {
          type: 'string',
        },
        department: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
    @UseInterceptors(
      FileInterceptor('image', {
        dest: './uploads/team',
      }),
    )
  addMember(
    @Body() memberData: createMemberDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.teamService.addMember(memberData, file);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing Team Members' })
  @ApiConsumes('multipart/form-data')
  updateMember(
    @Param('id') id: string,
    @Body() memberData: updateMemberDto
  ) {
    return this.teamService.updateMember(id, memberData)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Team Members' })
  deleteMember(@Param('id') id: string) {
    return this.teamService.deleteMember(id);
  }
}
