import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'
import * as path from 'path'
import { AbitService } from 'src/abits/abits.service'
import { ExportDto } from './dto/export.dto'
import { ExportListsDto } from './dto/exportLists.dto'
import { ExportService } from './export.service'
@Controller('export')
export class ExportController {
  constructor(
    private exportService: ExportService,
    private abitService: AbitService,
  ) {}

  @Post('/ege')
  @UseInterceptors(FileInterceptor('file'))
  async egeFromExcel(@UploadedFile() file: Express.Multer.File) {
    const response = await this.exportService.egeFromExcel(file)

    const abits = await this.abitService.getFullAbits()
    const data = []
    for (let x in response) {
      const ID = abits.find(
        (abit) =>
          response[x].passport ==
            `${abit.passport_series} ${abit.passport_num}` &&
          response[x].fio.toLowerCase() ==
            `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
      )
        ? abits.find(
            (abit) =>
              response[x].fio.toLowerCase() ==
              `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
          ).id
        : null
      const info = { ...response[x], test: ID }
      data.push(info)
    }
    return data
  }

  @Post('/sport')
  @UseInterceptors(FileInterceptor('file'))
  async sportFromExcel(@UploadedFile() file: Express.Multer.File) {
    const response = await this.exportService.sportFromExcel(file)

    const abits = await this.abitService.find()
    const data = []
    for (let x in response) {
      const ID = abits.find(
        (abit) =>
          response[x].fio.toLowerCase() ==
          `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
      )
        ? abits.find(
            (abit) =>
              response[x].fio.toLowerCase() ==
              `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
          ).id
        : null
      const info = { ...response[x], test: ID }
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
    for (let x in response) {
      const ID = abits.find(
        (abit) =>
          response[x].fio.toLowerCase() ==
          `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
      )
        ? abits.find(
            (abit) =>
              response[x].fio.toLowerCase() ==
              `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
          ).id
        : null
      const info = { ...response[x], test: ID }
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
    const fioAbits = abits.map((abit) => {
      return {
        fio: `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
        id: abit.id,
      }
    })
    const data = []
    response.info.map((info) => {
      const inf = {
        mark: null,
        results: null,
        abitId: null,
        fio: null,
        test: null,
      }
      inf.abitId = info.id
      inf.results = info.results
      inf.fio = info.fio.toLowerCase()
      if (info.mark == 'IV') {
        inf.mark = 2
      } else if (info.mark == 'III') {
        inf.mark = 3
      } else if (info.mark == 'II') {
        inf.mark = 4
      } else if (info.mark == 'I') {
        inf.mark = 5
      }
      inf.test = fioAbits
        .map((FIO) => {
          if (FIO.fio == inf.fio && FIO.id == inf.abitId) {
            return true
          }
        })
        .includes(true)
      data.push(inf)
    })
    return { data, group }
  }

  @Post('/calls')
  @UseInterceptors(FileInterceptor('file'))
  async callsFromExcel(@UploadedFile() file: Express.Multer.File) {
    const abits = await this.abitService.find()
    const fioAbits = abits.map((abit) => {
      return {
        fio: `${abit.lastName.toLowerCase()} ${abit.firstName.toLowerCase()} ${abit.surName.toLowerCase()}`,
        ld: abit.personal_file_number,
      }
    })
    const response = await this.exportService.callsFromExcel(file)
    const data = []
    response.map((info) => {
      const inf = {
        ld: null,
        fio: null,
        date: null,
        num: null,
        date_admission: null,
        test: null,
      }
      inf.ld = info.ld
      inf.date = info.date
      inf.num = info.num
      inf.date_admission = info.date_admission
      inf.fio = info.fio.toLowerCase()
      inf.test = fioAbits
        .map((FIO) => {
          if (FIO.fio == inf.fio && FIO.ld == inf.ld) {
            return true
          }
        })
        .includes(true)
      data.push(inf)
    })
    return data
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcel(@UploadedFile() file: Express.Multer.File) {
    return await this.exportService.importFromExcel(file)
  }

  @Get('/test')
  async test() {
    const abits = await this.abitService.getFullAbits()
    return await this.exportService.test(abits)
  }

  @Post('/egeCSV')
  async egeToCsv(@Body() who: any, @Res() res: Response) {
    const abits = who
    // const abits = await this.abitService.getFullAbits()
    let info = ''
    let t = false
    for (let i of abits) {
      if (i.passport_num) {
        if (t) {
          info =
            info +
            `\n${i.lastName};${i.firstName};${i.surName};${i.passport_series};${i.passport_num}`
        } else {
          t = true
          info =
            info +
            `${i.lastName};${i.firstName};${i.surName};${i.passport_series};${i.passport_num}`
        }
      }
    }
    const data = {
      fileName: path.resolve(
        __dirname,
        '..',
        '..',
        'EXPORT_FILES',
        'egeCSV.csv',
      ),
      data: info,
    }
    await this.exportService.egeToCsv(data)
    res.download(data.fileName, data.fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }

  @Get()
  async exportToExcel(@Res() res: Response): Promise<void> {
    const filePath = await this.exportService.exportToExcel()
    res.download(filePath, 'abits.xlsx', (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }

  @Post('/word')
  async exportToWord(@Body() data: ExportDto, @Res() res: Response) {
    const filePath = await this.exportService.exportToWord(data)
    res.download(filePath, data.fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }

  @Post('/holesStatements')
  async holesToStatements(@Body() data: JSON, @Res() res: Response) {
    const fileName = 'PPO.xlsx'
    const exp = { data, fileName }
    const filePath = await this.exportService.toTemplateExcel(exp)
    res.download(filePath, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }

  @Post('/toTemplateExcel')
  async toTemplateExcel(@Body() data: ExportDto, @Res() res: Response) {
    const filePath = await this.exportService.toTemplateExcel(data)
    res.download(filePath, data.fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }
  @Post('/toTemplateExcelLists')
  async toTemplateExcelLists(
    @Body() data: ExportListsDto,
    @Res() res: Response,
  ) {
    const filePath = await this.exportService.toTemplateExcelLists(data)
    res.download(filePath, data.fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }

  @Get('/sklon')
  async sklon() {
    const sklonenie = require('sklonenie')
    const name = sklonenie('Арсений')
    return name[2]
  }
}
