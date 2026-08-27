import { Controller, Get } from '@nestjs/common';
import { MembershipService } from './membership.service';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get('')
  getMembershipBenifits(){
    return this.membershipService.getMembershipBenifits();
  }

}
