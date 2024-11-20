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

  @Post()
  async create(@Body() createAbitDto: CreateAbitDto) {
    return this.abitService.create(createAbitDto);
  }

  @Get()
  async get() {
    const abits = await this.abitService.find({
      relations: {
        nationality: true,
        residence:true,
        family_social_status:true,
        militaryService_rank:true,
        militaryService_place:true,
        militaryService_SVO:true,
        militaryService_unit:true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        expulsion_reason:true,
        cossack_society: true,
        passport_issued_by:true,
        education_category:true,
        education_institute:true,
        uncanceledEducation_category:true,
        uncanceledEducation_institute:true,
        arrivedFrom:true,
        goneIn:true,   
        telephone:true,
        family:true,
        schoolMarks:true,
        egeMarks:true,
        entranceTest:true,
        sport:true,     
      },
    });
    return abits;
  }

  @Get('/:id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const abit = await this.abitService.findOne({
      where: {
        id: id,
      },
      relations: {
        nationality: true,
        residence:true,
        family_social_status:true,
        militaryService_rank:true,
        militaryService_place:true,
        militaryService_SVO:true,
        militaryService_unit:true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        expulsion_reason:true,
        cossack_society: true,
        passport_issued_by:true,
        education_category:true,
        education_institute:true,
        uncanceledEducation_category:true,
        uncanceledEducation_institute:true,
        arrivedFrom:true,
        goneIn:true,   
        telephone:true,
        family:true,
        schoolMarks:true,
        egeMarks:true,
        entranceTest:true,
        sport:true,     
      },
    });
    return abit;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateAbitDto, 
  ) { 
    const abit = await this.abitService.findOne({
      where: { 
        id: id,
      },
      })
    if (updateData.lastName?updateData.lastName.charAt(0).toUpperCase() != abit.lastName.charAt(0).toUpperCase():false){
      const newPersonalFileNumber = this.abitService.updatePersonalFileNumber(
        abit, updateData.lastName)
        updateData.personal_file_number = (await newPersonalFileNumber).personal_file_number
        updateData.personal_file_number_count = (await newPersonalFileNumber).personal_file_number_count
    }
    await this.abitService.update(
      {
        id: id,
      },
      updateData,
    )
    
    return await this.abitService.findOne({
      where: { 
        id: id,
      },
      relations: {
        nationality: true,
        residence:true,
        family_social_status:true,
        militaryService_rank:true,
        militaryService_place:true,
        militaryService_SVO:true,
        militaryService_unit:true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        expulsion_reason:true,
        cossack_society: true,
        passport_issued_by:true,
        education_category:true,
        education_institute:true,
        uncanceledEducation_category:true,
        uncanceledEducation_institute:true,
        arrivedFrom:true,
        goneIn:true,   
        telephone:true,
        family:true,
        schoolMarks:true,
        egeMarks:true,
        entranceTest:true,
        sport:true,     
      },
    });
  }

  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   await this.abitService.delete({
  //     id: id,
  //   });
  // } 

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


}
