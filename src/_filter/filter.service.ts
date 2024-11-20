import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as fs from 'fs'
import * as path from 'path'
import {
   FindManyOptions,
   Repository
} from 'typeorm'
import * as XLSX from 'xlsx'
import { FilterDto } from './dto/filter.dto'
import { TemplateFilterDto } from './dto/templateFilter.dto copy'
import { FilterEntity } from './entity/filter.entity'

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(FilterEntity)
    private filterRepository: Repository<FilterEntity>,
  ) {}
  
  

  async filterAbits(filterDto:FilterDto,abits:any[]) {
      
   var response = abits
   for (var x in filterDto.compare){
      const compare = filterDto.compare[x]
      const field = filterDto.field[x]
      const values = filterDto.values[x]
      
      if (field != null){
         
         response = response.filter(item => {
            var test = false
         
            for (var v in values){

               if (compare == 'includes') {
                  item[field].includes(values[v])? test=true:test=test
               } else if (compare == 'notIncludes') {
                  !item[field].includes(values[v])? test=true:test=test
               } else if (compare == '=') {
                  item[field] == values[v]? test=true:test=test
               } else if (compare == '>') {
                  item[field] > values[v]? test=true:test=test
               } else if (compare == '<') {
                  item[field] < values[v]? test=true:test=test
               } else if (compare == '>=') {
                  item[field] >= values[v]? test=true:test=test
               } else if (compare == '<=') {
                  item[field] <= values[v]? test=true:test=test
               } else if (compare == 'null') {
                  item[field] == null? test=true:test=test
               } else if (compare == 'notNull') {
                  item[field] != null? test=true:test=test
               }
            }
         return test
         })
      }
   }
   return response   
  }
  
  async exportFilterToExcel(data:any){
   const worksheet = XLSX.utils.json_to_sheet(data); 
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, 'Abits');

   const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'EXPORT_FILES','filter.xlsx')

   const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
   fs.writeFileSync(filePath, buffer);
   return filePath
 }

 async getFilterTemplates(options?: FindManyOptions<FilterEntity>){
   return await this.filterRepository.find(options)
 }

 async addFilterTemplate(data:TemplateFilterDto){   
   const newFilter = this.filterRepository.create(data);
   return this.filterRepository.save(newFilter);
 }
}
