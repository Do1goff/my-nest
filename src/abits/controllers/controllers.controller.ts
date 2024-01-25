import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateAbitDto } from '../dto/CreateAbit.dto';
import { AbitService } from '../services/services.service';
import { UpdateAbitDto } from '../dto/UpdateAbit.dto';
import { CreateAbitPasportDto } from '../dto/docs/CreateAbitPasport.dto';
import { CreateParentDto } from '../dto/parent/CreateParentMother.dto';
import { CreateINNDto } from '../dto/docs/CreateINN.dto';
import { CreateSNILSDto } from '../dto/docs/CreateSNILSDTO.dto';
import { CreateMedDto } from '../dto/godn/CreateMedDto.dto';
import { CreateMVDDto } from '../dto/godn/CreateMVD.dto';
import { CreatePODto } from '../dto/godn/CreatePODto.dto';
import { CreateZGTDto } from '../dto/godn/CreateZGTDto.dto';
import { CreateInfoDto } from '../dto/Info/CreateInfoDto.dto';
import { CreateKazakDto } from '../dto/Info/CreateKazakDto.dto';
import { CreateVKDto } from '../dto/Info/CreateVKDto.dto';
import { CreateObrazovDto } from '../dto/obrazov/CreateObrazovDto.dto';
import { CreateMarksDto } from '../dto/obrazov/CreateMarksDto.dto';
import { CreateL_NumDto } from '../dto/personal/CreateL_NumDto.dto';
import { CreateLDDto } from '../dto/personal/CreateLDDto.dto';
import { CreateSpecDto } from '../dto/personal/CreateSpecDto.dto';
import { CreateDopDto } from '../dto/rating/CreateDopDto.dto';
import { CreateEGEDto } from '../dto/rating/CreateEGEDto.dto';
import { CreatePh_PDto } from '../dto/rating/CreatePh_PDto.dto';
import { CreateVst_IspDto } from '../dto/rating/CreateVst_IspDto.dto';
import { CreateFamilyDto } from '../dto/parent/CreateFamilyDto.dto';
import { CreateTek_ObrDto } from '../dto/obrazov/CteateTek_ObrDto.dto';
import { CreateVSDto } from '../dto/Info/CreateVSDto.dto';
import { CreateZachislDto } from '../dto/personal/CreateZachislDto.dto';


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

    @Post(':id/family')
    createFamily(@Param('id', ParseIntPipe) id:number, @Body() createFamily: CreateFamilyDto){
        return this.abitService.createFamily(id, createFamily)
    }

    @Post(':id/inn')
    createINN(@Param('id', ParseIntPipe) id:number, @Body() createINN: CreateINNDto){
        return this.abitService.createINN(id, createINN)
    }

    @Post(':id/snils')
    createSNILS(@Param('id', ParseIntPipe) id:number, @Body() createSNILS: CreateSNILSDto){
        return this.abitService.createSNILS(id, createSNILS)
    }

    @Post(':id/med')
    createMed(@Param('id', ParseIntPipe) id:number, @Body() createMed: CreateMedDto){
        return this.abitService.createMed(id, createMed)
    }

    @Post(':id/mvd')
    createMVD(@Param('id', ParseIntPipe) id:number, @Body() createMVD: CreateMVDDto){
        return this.abitService.createMVD(id, createMVD)
    }

    @Post(':id/po')
    createPO(@Param('id', ParseIntPipe) id:number, @Body() createPO: CreatePODto){
        return this.abitService.createPO(id, createPO)
    }

    @Post(':id/zgt')
    createZGT(@Param('id', ParseIntPipe) id:number, @Body() createZGT: CreateZGTDto){
        return this.abitService.createZGT(id, createZGT)
    }

    @Post(':id/info')
    createInfo(@Param('id', ParseIntPipe) id:number, @Body() createInfo: CreateInfoDto){
        return this.abitService.createInfo(id, createInfo)
    }

    @Post(':id/kazak')
    createKazak(@Param('id', ParseIntPipe) id:number, @Body() createKazak: CreateKazakDto){
        return this.abitService.createKazak(id, createKazak)
    }

    @Post(':id/vk')
    createVK(@Param('id', ParseIntPipe) id:number, @Body() createVK: CreateVKDto){
        return this.abitService.createVK(id, createVK)
    }

    @Post(':id/vs')
    createVS(@Param('id', ParseIntPipe) id:number, @Body() createVS: CreateVSDto){
        return this.abitService.createVS(id, createVS)
    }

    @Post(':id/obrazov')
    createObrazov(@Param('id', ParseIntPipe) id:number, @Body() createObrazov: CreateObrazovDto){
        return this.abitService.createObrazov(id, createObrazov)
    }

    @Post(':id/tek_obr')
    createTek_Obr(@Param('id', ParseIntPipe) id:number, @Body() createTek_Obr: CreateTek_ObrDto){
        return this.abitService.createTek_Obr(id, createTek_Obr)
    }

    @Post(':id/marks')
    createMarks(@Param('id', ParseIntPipe) id:number, @Body() createMarks: CreateMarksDto){
        return this.abitService.createMarks(id, createMarks)
    }

    @Post(':id/l_num')
    createL_Num(@Param('id', ParseIntPipe) id:number, @Body() createL_Num: CreateL_NumDto){
        return this.abitService.createL_Num(id, createL_Num)
    }

    @Post(':id/ld')
    createLD(@Param('id', ParseIntPipe) id:number, @Body() createLD: CreateLDDto){
        return this.abitService.createLD(id, createLD)
    }

    @Post(':id/zachisl')
    createZachisl(@Param('id', ParseIntPipe) id:number, @Body() createZachisl: CreateZachislDto){
        return this.abitService.createZachisl(id, createZachisl)
    }

    @Post(':id/spec')
    createSpec(@Param('id', ParseIntPipe) id:number, @Body() createSpec: CreateSpecDto){
        return this.abitService.createSpec(id, createSpec)
    }

    @Post(':id/dop')
    createDop(@Param('id', ParseIntPipe) id:number, @Body() createDop: CreateDopDto){
        return this.abitService.createDop(id, createDop)
    }

    @Post(':id/ege')
    createEGE(@Param('id', ParseIntPipe) id:number, @Body() createEGE: CreateEGEDto){
        return this.abitService.createEGE(id, createEGE)
    }

    @Post(':id/vst_isp')
    createVst_Isp(@Param('id', ParseIntPipe) id:number, @Body() createVst_Isp: CreateVst_IspDto){
        return this.abitService.createVst_Isp(id, createVst_Isp)
    }

    @Post(':id/ph_p')
    createPh_P(@Param('id', ParseIntPipe) id:number, @Body() createPh_P: CreatePh_PDto){
        return this.abitService.createPh_P(id, createPh_P)
    }

}
