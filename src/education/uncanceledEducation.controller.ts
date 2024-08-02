import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateUncanceledEducationDto } from './dto/CreateUncanceledEducationDto.dto'
import { UncanceledEducationEntity } from './entity/uncanceledEducation.entity'
import { UncanceledEducationService } from './uncanceledEducation.service'

@Controller('uncanceledEducation')
export class UncanceledEducationController {
  constructor(private uncanceledEducationService: UncanceledEducationService) {}

  @Post()
  async create(@Body() data: CreateUncanceledEducationDto): Promise<UncanceledEducationEntity> {
    return this.uncanceledEducationService.create(data);
  }
  // @Get()
  // async get() {
  //   return await this.uncanceledEducationService.find({
   
  //   });
  // }
  // @Get(':id')
  // async getOne(@Param('id', ParseIntPipe) id: number) {
  //   return await this.uncanceledEducationService.findOne({
  //     where: {
  //       abitId: id,
  //     },
  //   });
  // }
  // @Put(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateData: CreateUncanceledEducationDto,
  // ) {
  //   return await this.uncanceledEducationService.update(
  //     {
  //       id: id,
  //     },
  //     updateData,
  //   );
  // }

  @Get()
  async get() {
    const educations = await this.uncanceledEducationService.find({
      relations: {
        category:true,
        institute:true,
      },
    });
    return educations; 
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const education = await this.uncanceledEducationService.findOne({
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
    @Body() updateData: CreateUncanceledEducationDto, 
  ) { 
    await this.uncanceledEducationService.update(
      {
        id: id,
      },
      updateData,
    );
    return await this.uncanceledEducationService.findOne({
      where: { 
        id: id,
      },
      relations: {
        institute:true,
        category:true
      },
    });
  }

}
