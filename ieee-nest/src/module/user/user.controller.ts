import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get('')
    @ApiOperation({ summary: 'Get all Team Members' })
    getTeam() {
      return this.userService.getUser();
    }
}
