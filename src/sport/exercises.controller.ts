import { Controller, Get } from '@nestjs/common'
import { ExercisesService } from './exercises.service'

@Controller('exercises')
export class ExerciseController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  async get() {
    const exercise = await this.exercisesService.find({});
    return exercise;
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
