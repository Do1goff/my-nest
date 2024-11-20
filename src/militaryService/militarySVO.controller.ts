import { Controller, Get } from '@nestjs/common'
import { MilitarySVOService } from './militarySVO.service'

@Controller('militarySVO')
export class MilitarySVOController {
  constructor(private MilitarySVOService: MilitarySVOService) {}

  @Get()
  async get() {
    const militarySVO = await this.MilitarySVOService.find({});
    return militarySVO;
  }

}
