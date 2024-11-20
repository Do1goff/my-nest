import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { HistoryDto } from './dto/HistoryDto.dto'
import { HistoryService } from './history.service'

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  @Get()
  async get() {
    return await this.historyService.find({
    });
    
  }

 
  @Post()
  async create(@Body() historyDto: HistoryDto) {
    return this.historyService.create(historyDto);
  } 

  
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() historyDto: HistoryDto, 
  ) { 
    await this.historyService.update(
      {
        id: id,
      },
      historyDto,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.historyService.delete({
      id: id,
    });
  } 
}
