import { Controller, Get } from '@nestjs/common'
import { EstablishedQuotaService } from './establishedQuota.service'

@Controller('establishedQuota')
export class EstablishedQuotaController {
  constructor(private establishedQuotaService: EstablishedQuotaService) {}

  @Get()
  async get() {
    const data = await this.establishedQuotaService.find({})
    return data
  }
}
