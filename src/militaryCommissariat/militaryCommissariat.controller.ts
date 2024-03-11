import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common'
import { CreateMilitaryCommissariatDto } from './dto/CreateMilitaryCommissariatDto.dto'
import { MilitaryCommissariatsEntity } from './entity/militaryCommissariats.entity'
import { MilitaryCommissariatService } from './militaryCommissariat.service'

@Controller('military_commissariat')
export class MilitaryCommissariatController {
  constructor(
    private militaryCommissariatService: MilitaryCommissariatService,
  ) {}

  @Post()
  async create(
    @Body() data: CreateMilitaryCommissariatDto,
  ): Promise<MilitaryCommissariatsEntity> {
    return this.militaryCommissariatService.create(data);
  }

  @Get()
  async get() {
    return await this.militaryCommissariatService.find({
      take: 50,
    });

  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.militaryCommissariatService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateMilitaryCommissariatDto,
  ) {
    return await this.militaryCommissariatService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
