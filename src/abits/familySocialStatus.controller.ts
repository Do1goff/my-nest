import { Controller, Get } from '@nestjs/common'
import { FamilySocialStatusService } from './familySocialStatus.service'

@Controller('family_social_status')
export class FamilySocialStatusController {
  constructor(private familySocialStatusService: FamilySocialStatusService) {}

  @Get()
  async get() {
    const socialStatus = await this.familySocialStatusService.find({});
    return socialStatus;
  }

}
