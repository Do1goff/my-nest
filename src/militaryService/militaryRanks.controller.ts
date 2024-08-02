import { Controller, Get } from '@nestjs/common'
import { MilitaryRanksService } from './militaryRanks.service'

@Controller('militaryRanks')
export class MilitaryRanksController {
  constructor(private MilitaryRanksService: MilitaryRanksService) {}

  @Get()
  async get() {
    const militaryRanks = await this.MilitaryRanksService.find({});
    return militaryRanks;
  }

  // @Get(':id')
  // async getOne(@Param('id', ParseIntPipe) id:number){
  //     const  = await this.Service.findOne({
  //         where:{
  //             id:id
  //         }
  //     })
  //     return 
  // }

  // @Post()
  // create(@Body() createDto: CreateDto) {
  //     return this.Service.create(createDto)
  // }

  // @Put(':id')
  // async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateDto){
  //     await this.Service.update({
  //         id: id
  //     }, updateData)
  // }

  // @Delete(':id')
  // async delete(@Param('id')id:number){
  //     await this.Service.delete({
  //             id:id
  //     })
  // }
}
