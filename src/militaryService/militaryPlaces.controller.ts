import { Controller, Get } from '@nestjs/common'
import { MilitaryPlacesService } from './militaryPlaces.service'

@Controller('militaryPlaces')
export class MilitaryPlacesController {
  constructor(private MilitaryPlacesService: MilitaryPlacesService) {}

  @Get()
  async get() {
    const militaryPlaces = await this.MilitaryPlacesService.find({});
    return militaryPlaces;
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
