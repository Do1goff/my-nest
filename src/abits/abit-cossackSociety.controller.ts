import { Controller, Get } from '@nestjs/common'
import { CossackSocietyService } from './abit-cossackSociety.service'

@Controller('cossack_society')
export class CossackSocietyController {
  constructor(private abitCossackSocietyService: CossackSocietyService) {}

  @Get()
  async get() {
    const cossackSociety = await this.abitCossackSocietyService.find({});
    return cossackSociety;
  }
}
