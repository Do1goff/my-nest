import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateAbitDto } from '../dto/CreateAbit.dto';
import { AbitService } from '../services/services.service';
import { UpdateAbitDto } from '../dto/UpdateAbit.dto';
import { CreateAbitPasportDto } from '../dto/CreateAbitPasport.dto';
import { CreateAbitTelDto } from '../dto/CreateAbitTel.dto';
import { CreateParentParams, ParentParams } from 'src/utils/types';


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

    @Post(':id/tels')
    createAbitTel(@Param('id', ParseIntPipe) id:number, @Body() createAbitTelDto: CreateAbitTelDto){
        return this.abitService.createAbitTel(id, createAbitTelDto)
    }

    @Post(':id/parents/mothers')
    createMother(@Param('id', ParseIntPipe) id:number, @Body() createMother: CreateParentParams, parentDetails:ParentParams){
        return this.abitService.createMother(id, createMother, parentDetails)
    }

}
