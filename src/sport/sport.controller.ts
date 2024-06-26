import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common'
import { CreateSportDto } from './dto/CreateSportDto.dto'
import { SportService } from './sport.service'

@Controller('sport')
export class SportController {
  constructor(private sportService: SportService) {}

  // @Post()
  // async create(@Body() data:CreateSportDto){
  //     return this.sportService.create(data)
  // }

  // @Get()
  // async get() {
  //     return await this.sportService.find({
  //         take:50,
  //         relations:{
  //             abit: true,
  //             exercises:true
  //         }
  //     })
  // }
  // @Get(':id')
  // async getOne(@Param('id', ParseIntPipe) id:number){
  //     return await this.sportService.findOne({
  //         where:{
  //             id:id
  //         }
  //     })
  // }
  // @Put(':id')
  // async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateSportDto){
  //     return await this.sportService.update({
  //         id: id
  //     }, updateData)
  // }

  @Post()
  async create(@Body() data: CreateSportDto) {
    const score = this.sportService.create(data);
    return await this.sportService.findOne({
      where: {
        id: (await score).id,
      },
      relations: {
        exercises: true,
      },
    });
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.sportService.find({
      where: {
        abitId: id,
      },
      take: 50,
      relations: {
        exercises: true,
      },
    });
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sportService.findOne({
      where: {
        id: id,
      },
      relations: {
        exercises: true,
      },
    });
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateSportDto,
  ) {
    await this.sportService.update(
      {
        id: id,
      },
      updateData,
    );
    return await this.sportService.findOne({
      where: {
        id: id,
      },
      relations: {
        exercises: true,
      },
    });
  }
}
