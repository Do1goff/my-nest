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
    });
    return abits;
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const abit = await this.abitService.findOne({
      where: {
        id: id,
      },
    });
    return abit;
  }

  @Post()
  create(@Body() createAbitDto: CreateAbitDto) {
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
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.abitService.delete({
      id: id,
    });
  }
}
