import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateEducationDto } from './dto/CreateEducationDto.dto'
import { EducationService } from './education.service'
import { EducationEntity } from './entity/education.entity'

@Controller('education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Post()
  async create(@Body() data: CreateEducationDto): Promise<EducationEntity> {
    return this.educationService.create(data);
  }

    @Get()
    async get() {
      const educations = await this.educationService.find({
        relations: {
          category:true,
          institute:true
        },
      });
      return educations; 
    }
  
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
      const education = await this.educationService.findOne({
        where: {
          abitId: id,
        },
        relations: {
          category:true,
          institute:true
        },
      });
      return education;
    }
  
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: CreateEducationDto, 
    ) { 
      await this.educationService.update(
        {
          abitId: id,
        },
        updateData,
      );
      return await this.educationService.findOne({
        where: { 
          abitId: id,
        },
        relations: {
          category:true,
          institute:true
        },
      });
    }
  
}
