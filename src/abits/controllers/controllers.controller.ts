import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateAbitDto } from '../dto/CreateAbit.dto';
import { AbitService } from '../services/services.service';
import { UpdateAbitDto } from '../dto/UpdateAbit.dto';
import { CreateAbitPasportDto } from '../dto/CreateAbitPasport.dto';
import { CreateParentDto } from '../dto/CreateParentMother.dto';


@Controller('abits')
export class AbitsController {
    constructor(private abitService: AbitService){}
    @Get()
    async getAbits() {
        const abits = await this.abitService.findAbits()
        return abits
    }

    @Get(':id')
    async getOneAbit(@Param('id', ParseIntPipe) id:number){
        const abit = await this.abitService.findOneAbit(id)
        return abit
    }

    @Post()
    createUser(@Body() createAbitDto: CreateAbitDto) {
        this.abitService.createAbit(createAbitDto)
    }

    @Put(':id')
    async UpdateAbitById(@Param('id', ParseIntPipe) id:number, @Body() updateAbitDto: UpdateAbitDto){
        await this.abitService.updateAbit(id, updateAbitDto)
    }
    @Delete(':id')
    async deleteAbit(@Param('id')id:number){
        await this.abitService.deleteAbit(id)
    }

    @Post(':id/pasports')
    createAbitPasoprt(@Param('id', ParseIntPipe) id:number, @Body() createAbitPasportDto: CreateAbitPasportDto) {
        return this.abitService.createAbitPasport(id, createAbitPasportDto)
    }

    @Post(':id/mothers')
    createMother(@Param('id', ParseIntPipe) id:number, @Body() createMother: CreateParentDto){
        return this.abitService.createMother(id, createMother)
    }

    @Post(':id/fathers')
    createFather(@Param('id', ParseIntPipe) id:number, @Body() createFather: CreateParentDto){
        return this.abitService.createFather(id, createFather)
    }

}
