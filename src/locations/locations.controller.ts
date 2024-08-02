import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateLocationDto } from './dto/CreateLocationDto.dto'
import { LocationsEntity } from './entity/locations.entity'
import { LocationsService } from './locations.service'

@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Post()
  async create(@Body() data: CreateLocationDto): Promise<LocationsEntity> {
    const loc =  this.locationsService.create(data);
    return await this.locationsService.findOne({
      where: { 
        id: (await loc).id,
      },
      relations: {
        region:true,
        district:true,
        city:true, 
      },
    }); 
  }
  @Get()
  async get() {
    return await this.locationsService.find({
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.locationsService.findOne({
      where: {
        id: id,
      },
      relations:{
        region:true,
        district:true,
        city:true,
      }
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateLocationDto,
  ) {
    await this.locationsService.update(
      {
        id: id,
      },
      updateData,
    );
    return await this.locationsService.findOne({
      where: { 
        id: id,
      },
      relations: {
        region:true,
        district:true,
        city:true,
      },
    }); 
  }
}
