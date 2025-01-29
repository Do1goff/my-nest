import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateMilitaryUnitDto } from './dto/CreateMilitaryUnitDto.dto'
import { MilitaryUnitsEntity } from './entity/militaryUnits.entity'
import { MilitaryUnitsService } from './militaryUnits.service'

@Controller('militaryUnits')
export class MilitaryUnitsController {
  constructor(private militaryUnitsService: MilitaryUnitsService) {}

  @Post()
  async create(@Body() data: CreateMilitaryUnitDto): Promise<MilitaryUnitsEntity> {
    return this.militaryUnitsService.create(data);
  }
  @Get()
  async get() {
    return await this.militaryUnitsService.find({
      relations:{
        // address:true
      }
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.militaryUnitsService.findOne({
      where: {
        id: id,
      },
      relations:{
        // address:true
      }
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateMilitaryUnitDto,
  ) {
    return await this.militaryUnitsService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
