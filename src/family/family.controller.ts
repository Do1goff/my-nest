import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateFamilyDto } from './dto/CreateFamilyDto.dto'
import { FamilyEntity } from './entity/family.entity'
import { FamilyService } from './family.service'

@Controller('family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Post()
  async create(@Body() data: CreateFamilyDto): Promise<FamilyEntity> {
    return this.familyService.create(data);
  }
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.familyService.find({
      where: {
        abitId: id,
      },
    });
  }
  // @Get(':id')
  // async get(@Param('id', ParseIntPipe) id: number) {
  //   return await this.familyService.findOne({
  //     where: {
  //       abitId: id,
  //     },
  //   });
  // }
  // @Get()
  // async get() {
  //   return await this.familyService.find({
  //     take: 50,
  //   });
  // }
  // @Get(':id')
  // async getOne(@Param('id', ParseIntPipe) id: number) {
  //   return await this.familyService.findOne({
  //     where: {
  //       id: id,
  //     },
  //   }); 
  // }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateFamilyDto,
  ) {
    return await this.familyService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
