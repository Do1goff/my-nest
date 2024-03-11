import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CommissionService } from './commission.service'
import { CreateCommissionDto } from './dto/CreateCommissionDto.dto'
import { CommissionEntity } from './entity/commission.entity'

@Controller('commission')
export class CommissionController {
  constructor(private commissionService: CommissionService) {}

  @Post()
  async create(@Body() data: CreateCommissionDto): Promise<CommissionEntity> {
    return this.commissionService.create(data);
  }
  @Get()
  async get() {
    return await this.commissionService.find({
      take: 50,
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.commissionService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateCommissionDto,
  ) {
    return await this.commissionService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
