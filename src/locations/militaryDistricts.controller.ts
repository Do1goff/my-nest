import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateMilitaryDistrictDto } from './dto/CreateMilitaryDistrictDto.dto'
import { MilitaryDistrictsEntity } from './entity/militaryDistricts.entity'
import { MilitaryDistrictsService } from './militaryDistricts.service'

@Controller('militaryDistricts')
export class MilitaryDistrictsController {
  constructor(private militaryDistrictsService: MilitaryDistrictsService) {}

  @Post()
  async create(@Body() data: CreateMilitaryDistrictDto): Promise<MilitaryDistrictsEntity> {
    return this.militaryDistrictsService.create(data);
  }
  @Get()
  async get() {
    return await this.militaryDistrictsService.find({
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.militaryDistrictsService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateMilitaryDistrictDto,
  ) {
    return await this.militaryDistrictsService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
