import { Controller, Get } from '@nestjs/common'
import { FormsEntranceTestService } from './formsEntranceTest.service'

@Controller('form_entrance_test')
export class FormsEntranceTestController {
  constructor(private formsEntranceTestService: FormsEntranceTestService) {}

  @Get()
  async get() {
    const formsEntranceTest = await this.formsEntranceTestService.find({});
    return formsEntranceTest;
  }

}
