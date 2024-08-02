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
