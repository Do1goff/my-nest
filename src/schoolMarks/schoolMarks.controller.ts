import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateSchoolMarksDto } from './dto/CreateSchoolMarksDto.dto'
import { SchoolMarksService } from './schoolMarks.service'

@Controller('school_marks')
export class SchoolMarksController {
  constructor(private schoolMarksService: SchoolMarksService) {}

  @Post()
  async create(@Body() data: CreateSchoolMarksDto) {
    const mark = this.schoolMarksService.create(data);
    return await this.schoolMarksService.findOne({
      where: {
        abitSubjectId: (await mark).abitSubjectId,
      },
      relations: {
        subject: true,
      },
    });
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.schoolMarksService.find({
      where: {
        abitId: id,
      },
      take: 50,
      relations: {
        subject: true,
      },
    });
  }

  @Get(':abitSubjectId')
  async getOne(@Param('abitSubjectId', ParseIntPipe) abitSubjectId: number) {
    return await this.schoolMarksService.findOne({
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
    @Body() updateData: CreateSchoolMarksDto,
  ) {
    await this.schoolMarksService.update(
      {
        abitSubjectId: id ,
      },
      updateData,
    );
    return await this.schoolMarksService.findOne({
      where: {
        abitSubjectId: id,
      },
      relations: {
        subject: true,
      },
    });
  }
}
