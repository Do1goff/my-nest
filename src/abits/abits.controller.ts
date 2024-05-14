import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { AbitService } from './abits.service'
import { CreateAbitDto } from './dto/CreateAbit.dto'

@Controller('abits')
export class AbitsController {
  constructor(private abitService: AbitService) {}

  @Get()
  async get() {
    const abits = await this.abitService.find({
      take: 50,
      relations: {
        nationality: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        cossack_society: true,
        militaryCommissariat: true,
        quota: true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
      },
    });
    return abits;
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const abit = await this.abitService.findOne({
      where: {
        id: id,
      },
      relations: {
        nationality: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        cossack_society: true,
        militaryCommissariat: true,
        quota: true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        addresses: true,
      },
    });
    return abit;
  }

  @Post()
  async create(@Body() createAbitDto: CreateAbitDto) {
    return this.abitService.create(createAbitDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateAbitDto, 
  ) { 
    await this.abitService.update(
      {
        id: id,
      },
      updateData,
    );
    return await this.abitService.findOne({
      where: { 
        id: id,
      },
      relations: {
        nationality: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        cossack_society: true,
        militaryCommissariat: true,
        quota: true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        addresses: true,
      },
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.abitService.delete({
      id: id,
    });
  }
}
