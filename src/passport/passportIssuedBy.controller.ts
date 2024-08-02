import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreatePassportIssuedByDto } from './dto/CreatePassportIssuedByDto.dto'
import { PassportIssuedByEntity } from './entity/passportIssuedBy.entity'
import { PassportIssuedByService } from './passportIssuedBy.service'

@Controller('passport_issued_by')
export class PassportIssuedByController {
  constructor(private passportIssuedByService: PassportIssuedByService) {}

  @Post()
  async create(@Body() data: CreatePassportIssuedByDto): Promise<PassportIssuedByEntity> {
    return this.passportIssuedByService.create(data);
  }
  @Get()
  async get() {
    return await this.passportIssuedByService.find({
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.passportIssuedByService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreatePassportIssuedByDto,
  ) {
    return await this.passportIssuedByService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
