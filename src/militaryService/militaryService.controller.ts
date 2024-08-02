import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { CreateMilitaryServiceDto } from './dto/CreateMilitaryServiceDto.dto'
import { MilitaryServiceEntity } from './entity/militaryService.entity'
import { MilitaryServiceService } from './militaryService.service'

@Controller('militaryService')
export class MilitaryServiceController {
  constructor(private militaryServiceService: MilitaryServiceService) {}

  @Post()
  async create(@Body() data: CreateMilitaryServiceDto): Promise<MilitaryServiceEntity> {
    return this.militaryServiceService.create(data);
  }

    @Get()
    async get() {
      const militaryServices = await this.militaryServiceService.find({
        relations: {
          rank:true,
          place:true,
          SVO:true,
          unit:true,
        },
      });
      return militaryServices; 
    }
  
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
      const militaryService = await this.militaryServiceService.findOne({
        where: {
          abitId: id,
        },
        relations: {
          rank:true,
          place:true,
          SVO:true,
          unit:true,
        },
      });
      return militaryService;
    }
  
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: CreateMilitaryServiceDto, 
    ) { 
      await this.militaryServiceService.update(
        {
          abitId: id,
        },
        updateData,
      );
      return await this.militaryServiceService.findOne({
        where: { 
          abitId: id,
        },
        relations: {
          rank:true,
          place:true,
          SVO:true,
          unit:true,
        },
      });
    }
  
}
