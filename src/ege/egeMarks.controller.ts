import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EgeMarksService } from './egeMarks.service';
import { CreateEgeMarksDto } from './dto/CreateEgeMarksDto.dto';

@Controller('ege_marks')
export class EgeMarksController {
    constructor(private egeMarksService: EgeMarksService){}


    @Post()
    async create(@Body() data:CreateEgeMarksDto){
        return this.egeMarksService.create(data)
    }

    @Get()
    async get() {
        return await this.egeMarksService.find({
            take:50,
            relations:{
                abit:true,
                subject:true
        }
        })
    }
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this.egeMarksService.findOne({
            where:{
                abitId:id
            }
        })
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateEgeMarksDto){
        return await this.egeMarksService.update({
            abitId: id
        }, updateData)
    }
}
 