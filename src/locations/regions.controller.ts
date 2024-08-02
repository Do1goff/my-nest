import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateRegionDto } from './dto/CreateRegionDto.dto'
import { RegionsService } from './regions.service'

@Controller('regions')
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Post()
  async create(@Body() data: CreateRegionDto){
    const reg = this.regionsService.create(data);
    return this.regionsService.findOne({
      where: {
        id: (await reg).id,
      },
      relations:{
        status:true
      }
    });
  }
  
  @Get()
  async get() {
    return await this.regionsService.find({
      relations: {
        status: true,
      }
    });
  }

  @Get(':regionId/districts')
  async findDistrictsByRegion(@Param('regionId') regionId: number) {
    return this.regionsService.findDistrictsByRegion(regionId)
  } 

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.regionsService.findOne({
      where: {
        id: id
      },
      relations: {
        status: true,
      }
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateRegionDto,
  ) {
    return await this.regionsService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
