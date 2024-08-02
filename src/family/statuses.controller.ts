import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateStatusDto } from './dto/CreateStatusDto.dto'
import { StatusesEntity } from './entity/statuses.entity'
import { StatusesService } from './statuses.service'

@Controller('statuses')
export class StatusesController {
  constructor(private statusesService: StatusesService) {}

  @Post()
  async create(@Body() data: CreateStatusDto): Promise<StatusesEntity> {
    return this.statusesService.create(data);
  }
  @Get()
  async get() {
    return await this.statusesService.find({
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.statusesService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateStatusDto,
  ) {
    return await this.statusesService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
