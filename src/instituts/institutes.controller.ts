import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateInstituteDto } from './dto/CreateInstituteDto.dto'
import { InstitutesEntity } from './entity/institutes.entity'
import { InstitutesService } from './institutes.service'

@Controller('institutes')
export class InstitutesController {
  constructor(private institutesService: InstitutesService) {}

  @Post()
  async create(@Body() data: CreateInstituteDto): Promise<InstitutesEntity> {
    return this.institutesService.create(data);
  }
  @Get()
  async get() {
    return await this.institutesService.find({
      take: 50,
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.institutesService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateInstituteDto,
  ) {
    return await this.institutesService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
