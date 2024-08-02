import { Controller, Get } from '@nestjs/common'
import { CategoryUncanceledEducationService } from './categoryUncanceledEducation.service'

@Controller('categoryUncanceledEducation')
export class CategoryUncanceledEducationController {
  constructor(
    private categoryUncanceledEducationService: CategoryUncanceledEducationService,
  ) {}

  @Get()
  async get() {
    const category = await this.categoryUncanceledEducationService.find({});
    return category;
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
