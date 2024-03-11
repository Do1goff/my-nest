import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SchoolMarksService } from './schoolMarks.service';
import { CreateSchoolMarksDto } from './dto/CreateSchoolMarksDto.dto';

@Controller('school_marks')
export class SchoolMarksController {
    constructor(private schoolMarksService: SchoolMarksService){}

    @Post()
    async create(@Body() data:CreateSchoolMarksDto){
        return this.schoolMarksService.create(data)
    }

    @Get()
    async get() {
        return await this.schoolMarksService.find({
            take:50,
            relations:{
                abit: true,
                subject:true
            }
        })
    }
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this.schoolMarksService.findOne({
            where:{
                abitId:id
            }
        })
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateSchoolMarksDto){
        return await this.schoolMarksService.update({
            abitId: id
        }, updateData)
    }
}
