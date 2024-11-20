import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { CreateEntranceTestDto } from './dto/CreateEntranceTestDto.dto'
import { EntranceTestService } from './entranceTest.service'

@Controller('entrance_test')
export class EntranceTestController {
    constructor(private entranceTestService: EntranceTestService){}

    @Post()
  async create(@Body() data: CreateEntranceTestDto) {
    const mark = this.entranceTestService.create(data);
    return await this.entranceTestService.findOne({
      where: {
        abitSubjectId: (await mark).abitSubjectId,
      },
      relations: {
        subject: true,
        form:true
      },
    });
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.entranceTestService.find({
      where: {
        abitId: id,
      },
      relations: {
        subject: true,
        form:true
      },
    });
  }

  @Get(':abitSubjectId')
  async getOne(@Param('abitSubjectId', ParseIntPipe) abitSubjectId: number) {
    return await this.entranceTestService.findOne({
      where: {
        abitSubjectId: abitSubjectId,
      },
      relations: {
        subject: true,
      },
    });
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateEntranceTestDto,
  ) {
    await this.entranceTestService.update(
      {
        abitSubjectId: id ,
      },
      updateData,
    );
    return await this.entranceTestService.findOne({
      where: {
        abitSubjectId: id,
      },
      relations: {
        subject: true,
      },
    });
  }
}
 