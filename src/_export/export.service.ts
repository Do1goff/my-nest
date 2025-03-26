import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Docxtemplater from 'docxtemplater'
import * as fs from 'fs'
import * as path from 'path'
import PizZip from 'pizzip'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Repository } from 'typeorm'
import * as XLSX from 'xlsx'
import * as XlsxTemplate from 'xlsx-template'
import { ExportDto } from './dto/export.dto'
import { ExportListsDto } from './dto/exportLists.dto'

@Injectable()
export class ExportService {
  constructor(
    @InjectRepository(AbitEntity)
    private abitRepository: Repository<AbitEntity>,
  ) {}

  async egeFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json(worksheet)

    const info = []
    let i = 1
    while (worksheet[`A${i}`] != null) {
      info.push(
        Object.assign(
          {},
          {
            fio: `${worksheet[`A${i}`].v} ${worksheet[`B${i}`].v} ${worksheet[`C${i}`].v}`,
            subject: worksheet[`G${i}`].v,
            mark: worksheet[`H${i}`].v,
            date: worksheet[`F${i}`].w,
            passport: `${worksheet[`D${i}`].v} ${worksheet[`E${i}`].v}`,
          },
        ),
      )
      i += 1
    }
    return info
  }

  async sportFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json(worksheet)

    const info = []
    if (
      worksheet[`D14`]?.v == 3 &&
      worksheet[`I13`]?.v.includes('упражнения')
    ) {
      for (let i in workbook.SheetNames) {
        if (workbook.SheetNames[i].includes('-')) {
          const workSheet = workbook.Sheets[workbook.SheetNames[i]]
          for (let i in data) {
            if (workSheet[`D${15 + parseInt(i)}`] != null) {
              if (workSheet[`I${15 + parseInt(i)}`] != null) {
                info.push(
                  Object.assign(
                    {},
                    {
                      fio: workSheet[`D${15 + parseInt(i)}`].v,
                      exercise_1_num: workSheet[`I${15 + parseInt(i)}`].v,
                      exercise_1_result: workSheet[`J${15 + parseInt(i)}`].v,
                      exercise_1_score: workSheet[`K${15 + parseInt(i)}`].v,
                      exercise_2_num: workSheet[`L${15 + parseInt(i)}`].v,
                      exercise_2_result: workSheet[`M${15 + parseInt(i)}`].v,
                      exercise_2_score: workSheet[`N${15 + parseInt(i)}`].v,
                      exercise_3_num: workSheet[`O${15 + parseInt(i)}`].v,
                      exercise_3_result: workSheet[`P${15 + parseInt(i)}`].v,
                      exercise_3_score: workSheet[`Q${15 + parseInt(i)}`].v,
                    },
                  ),
                )
              }
            } else {
              break
            }
          }
        }
      }
    } else {
      for (let i in workbook.SheetNames) {
        if (
          workbook.SheetNames[i].includes('ждан') ||
          workbook.SheetNames[i] == 'Кадеты'
        ) {
          const workSheet = workbook.Sheets[workbook.SheetNames[i]]
          if (
            workSheet[`F14`]?.v == 3 &&
            workSheet[`K13`]?.v.includes('упражнения')
          ) {
            for (let i in data) {
              if (workSheet[`F${15 + parseInt(i)}`] != null) {
                if (workSheet[`K${15 + parseInt(i)}`] != null) {
                  info.push(
                    Object.assign(
                      {},
                      {
                        fio: workSheet[`F${15 + parseInt(i)}`].v,
                        exercise_1_num: workSheet[`K${15 + parseInt(i)}`].v,
                        exercise_1_result: workSheet[`L${15 + parseInt(i)}`].v,
                        exercise_1_score: workSheet[`M${15 + parseInt(i)}`].v,
                        exercise_2_num: workSheet[`N${15 + parseInt(i)}`].v,
                        exercise_2_result: workSheet[`O${15 + parseInt(i)}`].v,
                        exercise_2_score: workSheet[`P${15 + parseInt(i)}`].v,
                        exercise_3_num: workSheet[`Q${15 + parseInt(i)}`].v,
                        exercise_3_result: workSheet[`R${15 + parseInt(i)}`].v,
                        exercise_3_score: workSheet[`S${15 + parseInt(i)}`].v,
                      },
                    ),
                  )
                }
              } else {
                break
              }
            }
          } else if (
            workSheet[`E14`]?.v == 3 &&
            workSheet[`J13`]?.v.includes('упражнения')
          ) {
            for (let i in data) {
              if (workSheet[`E${15 + parseInt(i)}`] != null) {
                if (workSheet[`J${15 + parseInt(i)}`] != null) {
                  info.push(
                    Object.assign(
                      {},
                      {
                        fio: workSheet[`E${15 + parseInt(i)}`].v,
                        exercise_1_num: workSheet[`J${15 + parseInt(i)}`].v,
                        exercise_1_result: workSheet[`K${15 + parseInt(i)}`].v,
                        exercise_1_score: workSheet[`L${15 + parseInt(i)}`].v,
                        exercise_2_num: workSheet[`M${15 + parseInt(i)}`].v,
                        exercise_2_result: workSheet[`N${15 + parseInt(i)}`].v,
                        exercise_2_score: workSheet[`O${15 + parseInt(i)}`].v,
                        exercise_3_num: workSheet[`P${15 + parseInt(i)}`].v,
                        exercise_3_result: workSheet[`Q${15 + parseInt(i)}`].v,
                        exercise_3_score: workSheet[`R${15 + parseInt(i)}`].v,
                      },
                    ),
                  )
                }
              } else {
                break
              }
            }
          }
        }
      }
    }

    return info
  }

  async entranceFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json(worksheet)

    const info = []
    for (let i in data) {
      if (worksheet[`A${2 + parseInt(i)}`] != null) {
        info.push(
          Object.assign(
            {},
            {
              fio: worksheet[`A${2 + parseInt(i)}`].v,
              subject: worksheet[`B${2 + parseInt(i)}`].v,
              mark: worksheet[`C${2 + parseInt(i)}`].v,
              date: worksheet[`D${2 + parseInt(i)}`].v,
            },
          ),
        )
      } else {
        break
      }
    }
    return info
  }

  async ppoFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]

    const data = XLSX.utils.sheet_to_json(worksheet)
    const group = worksheet['A5'].v.split(' ').pop()

    const info = []
    for (let i in data) {
      if (worksheet[`A${9 + parseInt(i)}`] != null) {
        info.push(
          Object.assign(
            {},
            {
              fio: worksheet[`B${9 + parseInt(i)}`].v,
              id: worksheet[`J${9 + parseInt(i)}`].v,
              mark: worksheet[`N${9 + parseInt(i)}`].v,
              results: [
                worksheet[`K${9 + parseInt(i)}`].v,
                worksheet[`L${9 + parseInt(i)}`].v,
                worksheet[`M${9 + parseInt(i)}`].v,
              ],
            },
          ),
        )
      } else {
        break
      }
    }
    return { info, group }
  }

  async callsFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]

    const data = XLSX.utils.sheet_to_json(worksheet)

    const info = []
    for (let i in data) {
      if (worksheet[`A${2 + parseInt(i)}`] != null) {
        info.push(
          Object.assign(
            {},
            {
              ld: worksheet[`A${2 + parseInt(i)}`]?.v,
              fio: worksheet[`C${2 + parseInt(i)}`]?.v,
              date_admission: worksheet[`D${2 + parseInt(i)}`]?.w,
              num: worksheet[`E${2 + parseInt(i)}`]?.v,
              date: worksheet[`F${2 + parseInt(i)}`].w,
            },
          ),
        )
      } else {
        break
      }
    }
    return info
  }

  async importFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json(worksheet)

    return data
  }

  async test(abits: any) {
    return abits
  }

  async egeToCsv(data: ExportDto) {
    fs.writeFileSync(data.fileName, data.data, { encoding: 'utf-8' })
  }

  async exportToExcel(): Promise<string> {
    const abits = await this.abitRepository.find({
      relations: {
        nationality: true,
        residence: true,
        family_social_status: true,
        militaryService_rank: true,
        militaryService_place: true,
        militaryService_SVO: true,
        militaryService_unit: true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota: true,
        priorityRight: true,
        personal_achievements: true,
        admission_commission: true,
        admission_examination_group: true,
        specialty_military_commissariat: true,
        specialty_1: true,
        specialty_2: true,
        specialty_3: true,
        specialty_admission: true,
        expulsion_reason: true,
        cossack_society: true,
        passport_issued_by: true,
        education_category: true,
        education_institute: true,
        uncanceledEducation_category: true,
        uncanceledEducation_institute: true,
        arrivedFrom: true,
      },
    })

    const abs = abits.map((abit) => ({
      personal_number: abit.personal_number,
      faculty: abit.specialty_1?.faculty,
      specialty: abit.specialty_1?.abbreviation,
      militaryService_rank: abit.militaryService_rank?.name,
      militaryService_category: abit.militaryService_category,
      lastName: abit.lastName,
      firstName: abit.firstName,
      surName: abit.surName,
      birthday: abit.birthday,
      militaryService_place: abit.militaryService_place?.name,
      militaryService_post: abit.militaryService_post,
      militaryService_unit: abit.militaryService_unit?.name,
      militaryService_unit_address: abit.militaryService_unit?.address,
      document_inn: abit.document_inn,
      nationality: abit.nationality?.name,
      family_status: abit.family_status,
      abit_childrens: abit.abit_childrens,
      passport: `${abit.passport_num} ${abit.passport_series}`,
      passport_date_issue: abit.passport_date_issue,
      passport_issued_by: abit.passport_issued_by?.name,
      passport_department_code: abit.passport_issued_by?.department_code,
      passport_birthplace: abit.passport_birthplace,
      secondCitizenship: abit.secondCitizenship,
      // phone1:abit.phone1,
      // phone2:abit.phone2,
      militaryCommissariat: abit.militaryCommissariat?.name,
      militaryCommissariat_region: abit.militaryCommissariat?.region,
      militaryCommissariat_address: abit.militaryCommissariat.address,
      militaryDistrict:
        abit.militaryCommissariat?.militaryDistrict?.abbreviation,
      militaryDistrict_name: abit.militaryCommissariat?.militaryDistrict?.name,
      // personal_number:abit.personal_number,
      family_social_status: abit.family_social_status,
      //  personal_number:abit.personal_number, mama
      //  personal_number:abit.personal_number, papa
      family_childrens: abit.family_childrens,
      family_address: abit.family_address,
      priorityRight: abit.priorityRight?.name,
      document_secrets_access: abit.document_secrets_access,
      document_mvd_prosecution: abit.document_mvd_prosecution,
      militaryService_SVO: abit.militaryService_SVO?.name,
      //  personal_number:abit.personal_number, veteran
      education_date_end: abit.education_date_end,
      education_category: abit.education_category?.name,
      //  personal_number:abit.personal_number, obr cat polnoe
      education_institute: abit.education_institute?.name,
      education_institute_address: abit.education_institute?.address,
      education_document: abit.education_document?.number,
      expulsion_date: abit.expulsion_date,
    }))
    const worksheet = XLSX.utils.json_to_sheet(abs)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Abits')

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      'EXPORT_FILES',
      'abits.xlsx',
    )

    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
    fs.writeFileSync(filePath, buffer)
    return filePath
  }

  async exportToWord(data: ExportDto) {
    const fileName = data.fileName
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      'TEMPLATE_FILES',
      fileName,
    )

    const content = fs.readFileSync(filePath, 'binary')
    const zip = new PizZip(content)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    })

    doc.render(data.data)

    const buffer = doc.getZip().generate({ type: 'nodebuffer' })
    const filePathNew = path.resolve(
      __dirname,
      '..',
      '..',
      'EXPORT_FILES',
      fileName,
    )
    fs.writeFileSync(filePathNew, buffer)
    return filePathNew
  }

  async toTemplateExcelLists(data: ExportListsDto) {
    const fileName = data.fileName
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      'TEMPLATE_FILES',
      fileName,
    )

    const content = fs.readFileSync(filePath)
    const template = new XlsxTemplate(content)
    for (let i = 1; i <= data.lists; i += 1) {
      template.substitute(i, data.data)
    }
    const buffer = template.generate({ type: 'nodebuffer' })
    const filePathNew = path.resolve(
      __dirname,
      '..',
      '..',
      'EXPORT_FILES',
      fileName,
    )
    fs.writeFileSync(filePathNew, buffer)
    return filePathNew
  }
  async toTemplateExcel(data: ExportDto) {
    const fileName = data.fileName
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      'TEMPLATE_FILES',
      fileName,
    )

    const content = fs.readFileSync(filePath)
    const template = new XlsxTemplate(content)
    var sheetNumber = 1

    template.substitute(sheetNumber, data.data)

    const buffer = template.generate({ type: 'nodebuffer' })
    let filePathNew = path.resolve(
      __dirname,
      '..',
      '..',
      'EXPORT_FILES',
      fileName,
    )
    fs.writeFileSync(filePathNew, buffer)
    return filePathNew
  }
}
