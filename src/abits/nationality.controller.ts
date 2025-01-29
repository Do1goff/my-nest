import { Controller, Get } from '@nestjs/common'
import { AbitNationalityService } from './nationality.service'

@Controller('nationality')
export class AbitNationalityController {
  constructor(private abitNationalityService: AbitNationalityService) {}

  @Get()
  async get() {
    const nationality = await this.abitNationalityService.find({
      relations: {
        abit: true,
      },
    })
    return nationality
  }
}
