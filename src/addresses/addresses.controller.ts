import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { AddressesService } from './addresses.service'
import { CreateAddressDto } from './dto/CreateAddressDto.dto'
import { AddressesEntity } from './entity/addresses.entity'

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @Post()
  async create(@Body() data: CreateAddressDto): Promise<AddressesEntity> {
    return this.addressesService.create(data);
  }
  @Get()
  async get() {
    return await this.addressesService.find({
      take: 50,
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.addressesService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateAddressDto,
  ) {
    return await this.addressesService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
