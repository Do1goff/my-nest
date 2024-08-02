import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateReasonExpulsionDto } from './dto/CreateReasonExpulsionDto.dto'
import { ReasonsEntity } from './entity/reasons.entity'
import { ReasonsService } from './reasons.service'

@Controller('reasons')
export class ReasonsController {
  constructor(private reasonsService: ReasonsService) {}

  @Post()
  async create(@Body() data: CreateReasonExpulsionDto): Promise<ReasonsEntity> {
    return this.reasonsService.create(data);
  }
  @Get()
  async get() {
    return await this.reasonsService.find({
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.reasonsService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateReasonExpulsionDto,
  ) {
    return await this.reasonsService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
