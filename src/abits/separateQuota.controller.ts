import { Controller, Get } from '@nestjs/common'
import { SeparateQuotaService } from './separateQuota.service'

@Controller('separateQuota')
export class SeparateQuotaController {
  constructor(private separateQuotaService: SeparateQuotaService) {}

  @Get()
  async get() {
    const data = await this.separateQuotaService.find({});
    return data;
  }

}
