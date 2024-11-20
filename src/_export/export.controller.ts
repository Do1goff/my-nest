import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'
import { AbitService } from 'src/abits/abits.service'
import { ExportDto } from './dto/export.dto'
import { ExportService } from './export.service'
@Controller('export')
export class ExportController {
  constructor(private exportService: ExportService, private abitService: AbitService) {}

  @Post('/ege')
  @UseInterceptors(FileInterceptor('file'))
  async egeFromExcel(@UploadedFile() file: Express.Multer.File) {
    const response = await this.exportService.egeFromExcel(file)
    
    const abits = await this.abitService.find()
    const data = []
    for(let x in response) {
      const ID = abits.find((abit) => response[x].fio.toLowerCase() == `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`)?abits.find((abit) => response[x].fio.toLowerCase() == `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`).id : null
      const info ={...response[x], id:ID}
      data.push(info)
     }
    return data
  }
  
  @Post('/entrance')
  @UseInterceptors(FileInterceptor('file'))
  async entranceFromExcel(@UploadedFile() file: Express.Multer.File) {
    const response = await this.exportService.entranceFromExcel(file)
    
    const abits = await this.abitService.find()
    const data = []
    for(let x in response) {
      const ID = abits.find((abit) => response[x].fio.toLowerCase() == `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`)?abits.find((abit) => response[x].fio.toLowerCase() == `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`).id : null
      const info ={...response[x], id:ID}
      data.push(info)
     }
    return data
  }

  @Post('/ppo')
  @UseInterceptors(FileInterceptor('file'))
  async ppoFromExcel(@UploadedFile() file: Express.Multer.File) {
    const response = await this.exportService.ppoFromExcel(file)
    const group = response.group
    const abits = await this.abitService.find()
    const fioAbits = abits.map(abit =>{
      return {fio:`${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,id:abit.id}
    })
    const data = []
    response.info.map(info => {
      const inf = {mark:null,results:null, abitId:null, fio:null, test:null}
      inf.abitId = info.id
      inf.results = info.results
      inf.fio = info.fio.toLowerCase()
      if (info.mark == 'IV'){
        inf.mark = 2
      } else if (info.mark == 'III'){
        inf.mark = 3
      } else if (info.mark == 'II'){
        inf.mark = 4
      } else if (info.mark == 'I'){
        inf.mark = 5
      }
      inf.test = fioAbits.map(FIO => {
        if (FIO.fio==inf.fio && FIO.id == inf.abitId){
          return true
        }
      }).includes(true)
      data.push(inf)
    })
    return {data, group}
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcel(@UploadedFile() file: Express.Multer.File) {
    return await this.exportService.importFromExcel(file)
  }

  @Get()
  async exportToExcel(@Res() res: Response): Promise<void> {
    const filePath = await this.exportService.exportToExcel();
    res.download(filePath, 'abits.xlsx', (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err, 
        });
      }
    });
  }

  @Get('/test')
  async test(){
    const abits = await this.abitService.getFullAbits()
    return await this.exportService.test(abits)
  }


  @Post('/word')
  async exportToWord(@Body() data:ExportDto, @Res() res: Response) {
    const filePath = await this.exportService.exportToWord(data)
    res.download(filePath, data.fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err, 
        });
      }
    });
  }

  @Post('/holesStatements')
  async holesToStatements(@Body() data:JSON, @Res() res: Response) {
    const fileName = 'PPO.xlsx'
    const exp = {data, fileName}
    const filePath = await this.exportService.holesToStatements(exp)
    res.download(filePath, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err, 
        });
      }
    });
  }

  @Get('/sklon')
  async sklon(){
    const sklonenie = require('sklonenie')
    const name = sklonenie( "Арсений")
    return name[2]
  }

}
