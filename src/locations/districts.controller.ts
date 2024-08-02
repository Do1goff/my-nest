import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { DistrictsService } from './districts.service'
import { CreateDistrictDto } from './dto/CreateDistrictDto.dto'

@Controller('districts')
export class DistrictsController {
  constructor(private districtsService: DistrictsService) {}

  @Post()
  async create(@Body() data: CreateDistrictDto){
    const reg = this.districtsService.create(data);
    return this.districtsService.findOne({
      where: {
        id: (await reg).id,
      },
      relations:{
        status:true,
        region:true,
      }
    });
  }
  
  @Get()
  async get() {
    return await this.districtsService.find({
      relations: {
        status: true,
        region:true,
      }
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.districtsService.findOne({
      where: {
        id: id,
      },
      relations: {
        status: true,
        region:true,
      }
    });
  }

  @Get(':districtId/cities')
  async findCitiesByDistrict(@Param('districtId') districtId: number) {
    return this.districtsService.findCitiesByDistrict(districtId)
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateDistrictDto,
  ) {
    return await this.districtsService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
