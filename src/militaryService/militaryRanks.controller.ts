import { Controller, Get } from '@nestjs/common'
import { MilitaryRanksService } from './militaryRanks.service'

@Controller('militaryRanks')
export class MilitaryRanksController {
  constructor(private MilitaryRanksService: MilitaryRanksService) {}

  @Get()
  async get() {
    const militaryRanks = await this.MilitaryRanksService.find({});
    return militaryRanks;
  }

}
