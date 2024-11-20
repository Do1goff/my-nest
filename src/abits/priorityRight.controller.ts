import { Controller, Get } from '@nestjs/common'
import { PriorityRightService } from './priorityRight.service'

@Controller('priorityRight')
export class PriorityRightController {
  constructor(private priorityRightService: PriorityRightService) {}

  @Get()
  async get() {
    const nationality = await this.priorityRightService.find({});
    return nationality;
  }

}
