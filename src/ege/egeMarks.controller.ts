import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateEgeMarksDto } from './dto/CreateEgeMarksDto.dto'
import { EgeMarksService } from './egeMarks.service'

@Controller('ege_marks')
export class EgeMarksController {
  constructor(private egeMarksService: EgeMarksService) {}


  @Post()
  async create(@Body() data: CreateEgeMarksDto) {
    const ASid = await this.egeMarksService.findOne({
      where:{abitId:data.abitId,subject:data.subject}
    })
    if (ASid!=null){
      await this.egeMarksService.update(
        {
          abitSubjectId:  ASid.abitSubjectId,
        },
        data,
      );
      return await this.egeMarksService.findOne({
        where: {
          abitSubjectId:  ASid.abitSubjectId,
        },
        relations: {
          subject: true,
        },
      });
    } else {
      
    const mark = this.egeMarksService.create(data);
     return await this.egeMarksService.findOne({
      where: {
        abitSubjectId: (await mark).abitSubjectId,
      },
      relations: {
        subject: true,
      },
    });
  }
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.egeMarksService.find({
      where: {
        abitId: id,
      },
      relations: {
        subject: true,
      },
    });
  }

  @Get()
  async getALL() {
    return await this.egeMarksService.find({
      relations: {
        subject: true,
      },
    });
  }

  @Get(':abitSubjectId')
  async getOne(@Param('abitSubjectId', ParseIntPipe) abitSubjectId: number) {
    return await this.egeMarksService.findOne({
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
    @Body() updateData: CreateEgeMarksDto,
  ) {
    await this.egeMarksService.update(
      {
        abitSubjectId: id ,
      },
      updateData,
    );
    return await this.egeMarksService.findOne({
      where: {
        abitSubjectId: id,
      },
      relations: {
        subject: true,
      },
    });
  }
}
