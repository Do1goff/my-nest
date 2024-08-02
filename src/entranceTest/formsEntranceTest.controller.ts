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

  // @Get(':id')
  // async getOne(@Param('id', ParseIntPipe) id:number){
  //     const abit = await this.abitService.findOne({
  //         where:{
  //             id:id
  //         }
  //     })
  //     return abit
  // }

  // @Post()
  // create(@Body() createAbitDto: CreateAbitDto) {
  //     return this.abitService.create(createAbitDto)
  // }

  // @Put(':id')
  // async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateAbitDto){
  //     await this.abitService.update({
  //         id: id
  //     }, updateData)
  // }

  // @Delete(':id')
  // async delete(@Param('id')id:number){
  //     await this.abitService.delete({
  //             id:id
  //     })
  // }
}
