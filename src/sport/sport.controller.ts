import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SportService } from './sport.service';
import { CreateSportDto } from './dto/CreateSportDto.dto';

@Controller('sport')
export class SportController {
    constructor(private sportService: SportService){}

    @Post()
    async create(@Body() data:CreateSportDto){
        return this.sportService.create(data)
    }

    @Get()
    async get() {
        return await this.sportService.find({
            take:50,
            relations:{
                abit: true,
                exercises:true
            }
        })
    }
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this.sportService.findOne({
            where:{
                id:id
            }
        })
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateData: CreateSportDto){
        return await this.sportService.update({
            id: id
        }, updateData)
    }
}
 