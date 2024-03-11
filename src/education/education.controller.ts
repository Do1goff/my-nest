import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/CreateEducationDto.dto';

@Controller('education')
export class EducationController {
    constructor(private educationService: EducationService){}

    @Get()
    async get() {
        return this.educationService.find({
            take: 50,
            skip: 20,
            relations:{
                abit: true,
            }
        })
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this.educationService.findOne({
            where:{
                id:id
            }
        })
    }

    @Post()
    create(@Body() data: CreateEducationDto) {
        return this.educationService.create(data)
    }


    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateEducationDto){
         return await this.educationService.update({
            id: id
        }, updateData)
    }

    @Delete(':id')
    async delete(@Param('id')id:number){
        await this.educationService.delete({
                id:id
        }) 
    }

}
