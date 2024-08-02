import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CitiesService } from './cities.service'
import { CreateCityDto } from './dto/CreateCityDto.dto'

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Post()
  async create(@Body() data: CreateCityDto){
    const reg = this.citiesService.create(data);
    return this.citiesService.findOne({
      where: {
        id: (await reg).id,
      },
      relations:{
        status:true,
        district:true,
      }
    });
  }
  
  @Get()
  async get() {
    return await this.citiesService.find({
      relations: {
        status: true,
        district:true,
      }
    });
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.citiesService.findOne({
      where: {
        id: id,
      },
      relations: {
        status: true,
        district:true,
      }
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateCityDto,
  ) {
    return await this.citiesService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
