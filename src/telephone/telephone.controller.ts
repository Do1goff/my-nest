import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateTelephoneDto } from './dto/CreateTelephoneDto.dto'
import { TelephoneEntity } from './entity/telephone.entity'
import { TelephoneService } from './telephone.service'

@Controller('telephone')
export class TelephoneController {
  constructor(private telephoneService: TelephoneService) {}

  @Post()
  async create(@Body() data: CreateTelephoneDto): Promise<TelephoneEntity> {
    return this.telephoneService.create(data);
  }
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.telephoneService.find({
      where: {
        abitId: id,
      },
    });
  }
  // @Get(':id')
  // async get(@Param('id', ParseIntPipe) id: number) {
  //   return await this.telephoneService.findOne({
  //     where: {
  //       abitId: id,
  //     },
  //   });
  // }
  // @Get()
  // async get() {
  //   return await this.telephoneService.find({
  //     take: 50,
  //   });
  // }
  // @Get(':id')
  // async getOne(@Param('id', ParseIntPipe) id: number) {
  //   return await this.telephoneService.findOne({
  //     where: {
  //       id: id,
  //     },
  //   }); 
  // }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateTelephoneDto,
  ) {
    return await this.telephoneService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
