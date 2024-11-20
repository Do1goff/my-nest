import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Docxtemplater from 'docxtemplater'
import * as fs from 'fs'
import * as path from 'path'
import PizZip from 'pizzip'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import {
  Repository
} from 'typeorm'
import * as XLSX from 'xlsx'
import * as XlsxTemplate from 'xlsx-template'
import { ExportDto } from './dto/export.dto'

@Injectable()
export class ExportService {
  constructor(
    @InjectRepository(AbitEntity)
    private abitRepository: Repository<AbitEntity>,
  ) {}
  
  async egeFromExcel(file: Express.Multer.File){
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    const info = []
    for(let i in data){
      if (worksheet[`A${2+parseInt(i)}`] != null){
        info.push(Object.assign({},{fio:worksheet[`A${2+parseInt(i)}`].v, subject:worksheet[`B${2+parseInt(i)}`].v, mark:worksheet[`C${2+parseInt(i)}`].v, date:worksheet[`D${2+parseInt(i)}`].v}))
      } else {
        break
      }   
    }
    return info
  }
 
  async entranceFromExcel(file: Express.Multer.File){
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    const info = []
    for(let i in data){
      if (worksheet[`A${2+parseInt(i)}`] != null){
        info.push(Object.assign({},{fio:worksheet[`A${2+parseInt(i)}`].v, subject:worksheet[`B${2+parseInt(i)}`].v, mark:worksheet[`C${2+parseInt(i)}`].v, date:worksheet[`D${2+parseInt(i)}`].v}))
      } else {
        break
      }   
    }
    return info
  }
 
  async ppoFromExcel(file: Express.Multer.File){
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    const data = XLSX.utils.sheet_to_json(worksheet);
    const group = worksheet['A5'].v.split(' ').pop()

    const info = []
    for(let i in data){
      if (worksheet[`A${9+parseInt(i)}`] != null){
        info.push(Object.assign({},{fio:worksheet[`B${9+parseInt(i)}`].v, id:worksheet[`J${9+parseInt(i)}`].v, mark:worksheet[`N${9+parseInt(i)}`].v, results:[worksheet[`K${9+parseInt(i)}`].v,worksheet[`L${9+parseInt(i)}`].v,worksheet[`M${9+parseInt(i)}`].v]}))
      } else { 
        break
      }   
    }    
    return {info, group}
  }

  async importFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    return data;
  }

  async test(abits:any){
    return abits    
  }



  async exportToExcel(): Promise<string> {
    const abits = await this.abitRepository.find({
      relations: {
        nationality: true,
        residence:true,
        family_social_status:true,
        militaryService_rank:true,
        militaryService_place:true,
        militaryService_SVO:true,
        militaryService_unit:true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota:true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        expulsion_reason:true,
        cossack_society: true,
        passport_issued_by:true,
        education_category:true,
        education_institute:true,
        uncanceledEducation_category:true,
        uncanceledEducation_institute:true,
        arrivedFrom:true,
        goneIn:true,        
      },
    });

    const abs = abits.map(abit =>({
      personal_number:abit.personal_number,
      faculty:abit.specialty_1?.faculty,
      specialty:abit.specialty_1?.abbreviation,
      militaryService_rank:abit.militaryService_rank?.name,
      militaryService_category:abit.militaryService_category,
      lastName:abit.lastName,
      firstName:abit.firstName,
      surName:abit.surName,
      birthday:abit.birthday,
      militaryService_place:abit.militaryService_place?.name,
      militaryService_post:abit.militaryService_post,
      militaryService_unit:abit.militaryService_unit?.name,
      militaryService_unit_address:abit.militaryService_unit?.address?.region?.name,
      document_inn:abit.document_inn,
      nationality:abit.nationality?.name,
      family_status:abit.family_status,
      abit_childrens:abit.abit_childrens,
      passport:`${abit.passport_num} ${abit.passport_series}`,
      passport_date_issue:abit.passport_date_issue,
      passport_issued_by:abit.passport_issued_by?.name,
      passport_department_code:abit.passport_issued_by?.department_code,
      passport_birthplace:abit.passport_birthplace,
      secondCitizenship:abit.secondCitizenship,
      // phone1:abit.phone1,
      // phone2:abit.phone2,
      militaryCommissariat:abit.militaryCommissariat?.name,
      militaryCommissariat_name:abit.militaryCommissariat?.name_official,
      militaryCommissariat_region:abit.militaryCommissariat?.region,
      militaryCommissariat_address:abit.militaryCommissariat.address,
      militaryDistrict:abit.militaryCommissariat?.militaryDistrict?.abbreviation,
      militaryDistrict_name:abit.militaryCommissariat?.militaryDistrict?.name,
      // personal_number:abit.personal_number,
      family_social_status:abit.family_social_status,
      //  personal_number:abit.personal_number, mama
      //  personal_number:abit.personal_number, papa
      family_childrens:abit.family_childrens,
      family_address:abit.family_address,
      priorityRight:abit.priorityRight?.name,
      document_secrets_access:abit.document_secrets_access,
      document_mvd_prosecution:abit.document_mvd_prosecution,
      militaryService_SVO:abit.militaryService_SVO?.name,
      //  personal_number:abit.personal_number, veteran
      education_date_end:abit.education_date_end,
      education_category:abit.education_category?.name,
      //  personal_number:abit.personal_number, obr cat polnoe
      education_institute:abit.education_institute?.name,
      education_institute_address:abit.education_institute?.address?.region?.name,
      education_document:abit.education_document?.number,
      expulsion_date:abit.expulsion_date,
    }))
    const worksheet = XLSX.utils.json_to_sheet(abs); 
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Abits');

    const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'EXPORT_FILES','abits.xlsx')

    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync(filePath, buffer);
    return filePath
  }

  async exportToWord(data:ExportDto) {
    const fileName = data.fileName
    const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'TEMPLATE_FILES',fileName)

    const content = fs.readFileSync(filePath, 'binary')
    const zip = new PizZip(content)
    const doc = new Docxtemplater(zip, {paragraphLoop:true, linebreaks:true})

    doc.render(data.data)

    const buffer = doc.getZip().generate({type:'nodebuffer'})
    let filePathNew = path.resolve(__dirname, '..', '..', '..', '..', 'EXPORT_FILES',fileName)
    fs.writeFileSync(filePathNew, buffer)
    return filePathNew
  }

  async holesToStatements(data:ExportDto){
    const fileName = data.fileName
    const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'TEMPLATE_FILES',fileName)

    const content = fs.readFileSync(filePath)
    const template = new XlsxTemplate(content)
    var sheetNumber = 1

    template.substitute(sheetNumber, data)

    var buffer = template.generate({type:'nodebuffer'})
    let filePathNew = path.resolve(__dirname, '..', '..', '..', '..', 'EXPORT_FILES',fileName)
    fs.writeFileSync(filePathNew, buffer)
    return filePathNew
  }

}
