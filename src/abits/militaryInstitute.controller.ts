import { Controller, Get } from '@nestjs/common'
import { MilitaryInstituteService } from './militaryInstitute.service'

@Controller('militaryInstitute')
export class MilitaryInstituteController {
  constructor(private MilitaryInstituteService: MilitaryInstituteService) {}

  @Get()
  async get() {
    const militaryInstitute = await this.MilitaryInstituteService.find({});
    return militaryInstitute;
  }
}
