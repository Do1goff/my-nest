import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { AbitService } from 'src/abits/abits.service'
import { FilterDto } from './dto/filter.dto'
import { TemplateFilterDto } from './dto/templateFilter.dto copy'
import { FilterService } from './filter.service'
@Controller('filter')
export class FilterController {
  constructor(
    private filterService: FilterService,
    private abitService: AbitService,
  ) {}

  @Post()
  async filterAbits(@Body() filterDto: FilterDto) {
    const abits = await this.abitService.getFullAbits()
    return await this.filterService.filterAbits(filterDto, abits)
  }

  @Get()
  async fetchAbits() {
    return await this.abitService.getFullAbits()
  }

  @Post('/export')
  async exportFilterToExcel(@Body() abits: any, @Res() res: Response) {
    // const abits = data.abits
    // const exportData = abits.map(abit => Object.keys(abit).filter(key => data.fields.includes(key)).reduce((obj, key)=> {obj[key] = abit[key]; return obj}, {}))
    const filePath = await this.filterService.exportFilterToExcel(abits)
    res.download(filePath, 'abits.xlsx', (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        })
      }
    })
  }

  @Get('/template')
  async getTemplates() {
    return await this.filterService.getFilterTemplates()
  }

  @Post('/template')
  async addTemplate(@Body() data: TemplateFilterDto) {
    await this.filterService.addFilterTemplate(data)
    return await this.filterService.getFilterTemplates()
  }
}
