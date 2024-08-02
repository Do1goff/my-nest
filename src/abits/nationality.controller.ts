import { Controller, Get } from '@nestjs/common'
import { AbitNationalityService } from './nationality.service'

@Controller('nationality')
export class AbitNationalityController {
  constructor(private abitNationalityService: AbitNationalityService) {}

  @Get()
  async get() {
    const nationality = await this.abitNationalityService.find({});
    return nationality;
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
