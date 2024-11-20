import { Controller, Get } from '@nestjs/common'
import { AbitSpecialtyService } from './specialty.service'

@Controller('specialty')
export class AbitSpecialtyController {
  constructor(private abitSpecialtyService: AbitSpecialtyService) {}

  @Get()
  async get() {
    const specialty = await this.abitSpecialtyService.find({});
    return specialty;
  }

}
