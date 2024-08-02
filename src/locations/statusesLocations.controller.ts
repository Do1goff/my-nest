import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateStatusLocationDto } from './dto/CreateStatusLocationDto.dto'
import { StatusesLocationsEntity } from './entity/statusesLocations.entity'
import { StatusesLocationsService } from './statusesLocations.service'

@Controller('statusesLocations')
export class StatusesLocationsController {
  constructor(private statusesLocationsService: StatusesLocationsService) {}

  @Post()
  async create(@Body() data: CreateStatusLocationDto): Promise<StatusesLocationsEntity> {
    return this.statusesLocationsService.create(data);
  }
  @Get()
  async get() {
    return await this.statusesLocationsService.find({
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.statusesLocationsService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateStatusLocationDto,
  ) {
    return await this.statusesLocationsService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
