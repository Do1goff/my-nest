import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreatePassportDto } from './dto/CreatePassportDto.dto'
import { PassportEntity } from './entity/passport.entity'
import { PassportService } from './passport.service'

@Controller('passport')
export class PassportController {
  constructor(private passportService: PassportService) {}

  @Post()
  async create(@Body() data: CreatePassportDto): Promise<PassportEntity> {
    return this.passportService.create(data);
  }

    @Get()
    async get() {
      const passports = await this.passportService.find({
        relations: {
          issued_by:true
        },
      });
      return passports; 
    }
  
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
      const passport = await this.passportService.findOne({
        where: {
          abitId: id,
        },
        relations: {
          issued_by:true
        },
      });
      return passport;
    }
  
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: CreatePassportDto, 
    ) { 
      await this.passportService.update(
        {
          abitId: id,
        },
        updateData,
      );
      return await this.passportService.findOne({
        where: { 
          abitId: id,
        },
        relations: {
          issued_by:true
        },
      });
    }
  
}
