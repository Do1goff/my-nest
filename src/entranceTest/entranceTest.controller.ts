import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EntranceTestService } from './entranceTest.service';
import { CreateEntranceTestDto } from './dto/CreateEntranceTestDto.dto';

@Controller('entrance_test')
export class EntranceTestController {
    constructor(private entranceTestService: EntranceTestService){}

    @Post()
    async create(@Body() data:CreateEntranceTestDto){
        return this.entranceTestService.create(data)
    }

    @Get()
    async get() {
        return await this.entranceTestService.find({
            take:50,
            relations:{
                abit: true,
                subject:true
            }
        })
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this.entranceTestService.findOne({
            where:{
                abitId:id
            }
        })
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateEntranceTestDto){
        return await this.entranceTestService.update({
            abitId: id
        }, updateData)
    }
}
 