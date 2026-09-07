import { Controller, Get } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get('')
  @ApiOperation({ summary: 'Get membership benefit'})
  getMembershipBenifits(){
    return this.membershipService.getMembershipBenifits();
  }

}
