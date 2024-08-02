import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { AbitService } from './abits.service'
import { CreateAbitDto } from './dto/CreateAbit.dto'

@Controller('abits')
export class AbitsController {
  constructor(private abitService: AbitService) {}

  @Get()
  async get() {
    const abits = await this.abitService.find({
      relations: {
        nationality: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        cossack_society: true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        family_social_status:true,
        arrivedFrom:true,
        goneIn:true,
        residence:true,
        education:true,
        uncanceledEducation:true,
        militaryService:true,
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
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        addresses: true,
        family_social_status:true,
        arrivedFrom:true,
        goneIn:true,
        residence:true,
        education:true,
        uncanceledEducation:true,
        militaryService:true,
      },
    });
    return abit;
  }

  @Get('/examGroup/:group')
  async getCommissions(@Param('group', ParseIntPipe) group: number) {
    const abit = await this.abitService.find({
      relations: {
        admission_examination_group: true,
      },
    });
      const result = abit.filter((abit) => abit.admission_examination_group != null ? abit.admission_examination_group.id === group : 0).length
    
    return result;
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
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        addresses: true,
        family_social_status:true,
        arrivedFrom:true,
        goneIn:true,
        residence:true,
        education:true,
        uncanceledEducation:true,
        militaryService:true,
      },
    });
  }

  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   await this.abitService.delete({
  //     id: id,
  //   });
  // }
}
