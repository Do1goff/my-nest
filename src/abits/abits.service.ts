import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateAbitDto } from './dto/CreateAbit.dto'

@Injectable()
export class AbitService {
  constructor(
    @InjectRepository(AbitEntity)
    private abitRepository: Repository<AbitEntity>,
  ) {}

  find(options?: FindManyOptions<AbitEntity>): Promise<AbitEntity[]> {
    return this.abitRepository.find(options);
  }

  findOne(options: FindOneOptions<AbitEntity>): Promise<AbitEntity> {
    return this.abitRepository.findOne(options);
  }

  async getFullAbits() {
    const abits = await this.abitRepository.find({
      relations: {
        nationality: true,
        family_social_status:true,
        militaryService_rank:true,
        militaryService_place:true,
        militaryService_SVO:true,
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
        uncanceledEducation_category:true,
        arrivedFrom:true,
        goneIn:true,   
        telephone:true,
        family:true,
      },
      join:{
        alias:'abit',
        leftJoinAndSelect:{
          ege:'abit.egeMarks',
          ege_subject:'ege.subject',
          entrance:'abit.entranceTest',
          entrance_subject:'entrance.subject',
          school:'abit.schoolMarks',
          school_subject:'school.subject',
          sport:'abit.sport',
          exercise:'sport.exercises',
          residence:'abit.residence',
          residence_region:'residence.region',
          residence_district:'residence.district',
          residence_city:'residence.city',
          residence_region_status:'residence_region.status',
          residence_district_status:'residence_district.status',
          residence_city_status:'residence_city.status',
          education_institute:'abit.education_institute',
          education_institute_address:'education_institute.address',
          education_institute_address_region:'education_institute_address.region',
          education_institute_address_district:'education_institute_address.district',
          education_institute_address_city:'education_institute_address.city',
          education_institute_address_region_status:'education_institute_address_region.status',
          education_institute_address_district_status:'education_institute_address_district.status',
          education_institute_address_city_status:'education_institute_address_city.status',
          uncanceledEducation_institute:'abit.uncanceledEducation_institute',
          uncanceledEducation_institute_address:'uncanceledEducation_institute.address',
          // uncanceledEducation_institute_address_region:'uncanceledEducation_institute_address.region',
          // uncanceledEducation_institute_address_district:'uncanceledEducation_institute_address.district',
          // uncanceledEducation_institute_address_city:'uncanceledEducation_institute_address.city',
          // uncanceledEducation_institute_address_region_status:'uncanceledEducation_institute_address_region.status',
          // uncanceledEducation_institute_address_district_status:'uncanceledEducation_institute_address_district.status',
          // uncanceledEducation_institute_address_city_status:'uncanceledEducation_institute_address_city.status',
          militaryService_unit:'abit.militaryService_unit',
          militaryService_unit_address:'militaryService_unit.address',
          militaryService_unit_address_region:'militaryService_unit_address.region',
          militaryService_unit_address_district:'militaryService_unit_address.district',
          militaryService_unit_address_city:'militaryService_unit_address.city',
          militaryService_unit_address_region_status:'militaryService_unit_address_region.status',
          militaryService_unit_address_district_status:'militaryService_unit_address_district.status',
          militaryService_unit_address_city_status:'militaryService_unit_address_city.status',
        }
      }
    })
    const fullAbits = abits.map(abit =>({
      id:abit.id,
      lastName:abit.lastName,
      firstName:abit.firstName,
      surName:abit.surName,
      birthday:abit.birthday,
      note:abit.note,
      nationality:abit.nationality?.name,
      gender:abit.gender,
      telephone:abit.telephone,
      phone_1:abit.telephone[0]?.number,
      phone_2:abit.telephone[1]?.number,
      // неполно
      residence:`${abit.residence?.region?.name} ${abit.residence?.region?.status?.name}, ${abit.residence?.district?.name} ${abit.residence?.district?.status?.name} ${abit.residence?.city?.name? ', '+abit.residence?.city?.name  :''} ${abit.residence?.city?.status?.name?? ''}`,
      secondCitizenship:abit.secondCitizenship,
      personal_file_number:abit.personal_file_number,
      personal_file_number_count:abit.personal_file_number_count,
      personal_file_reg:abit.personal_file_reg,
      personal_file_date_reg:abit.personal_file_date_reg,
      personal_file_existence:abit.personal_file_existence,
      family_status:abit.family_status,
      family_address:abit.family_address,
      family_social_status:abit.family_social_status,
      family_childrens:abit.family_childrens,
      abit_childrens:abit.abit_childrens,
      
      family:abit.family,
      father_lastName:abit.family?.find(member => member.kinship == 'Отец')?.lastName,
      father_firstName:abit.family?.find(member => member.kinship == 'Отец')?.firstName,
      father_surName:abit.family?.find(member => member.kinship == 'Отец')?.surName,
      father_birthday:abit.family?.find(member => member.kinship == 'Отец')?.birthday,
      father_fail:abit.family?.find(member => member.kinship == 'Отец')?.fail,
      father_status:abit.family?.find(member => member.kinship == 'Отец')?.status,
      mother_lastName:abit.family?.find(member => member.kinship == 'Мать')?.lastName,
      mother_firstName:abit.family?.find(member => member.kinship == 'Мать')?.firstName,
      mother_surName:abit.family?.find(member => member.kinship == 'Мать')?.surName,
      mother_birthday:abit.family?.find(member => member.kinship == 'Мать')?.birthday,
      mother_fail:abit.family?.find(member => member.kinship == 'Мать')?.fail,
      mother_status:abit.family?.find(member => member.kinship == 'Мать')?.status,
      personal_number:abit.personal_number,
      personal_number_giving:abit.personal_number_giving,
      militaryService_rank:abit.militaryService_rank?.name,
      militaryService_post:abit.militaryService_post,
      militaryService_place:abit.militaryService_place?.name,
      militaryService_unit:abit.militaryService_unit?.name,
      // неполно
      militaryService_unit_address:`${abit.militaryService_unit?.address?.region?.name} ${abit.militaryService_unit?.address?.region?.status?.name}, ${abit.militaryService_unit?.address?.district?.name} ${abit.militaryService_unit?.address?.district?.status?.name} ${abit.militaryService_unit?.address?.city?.name? ', '+abit.militaryService_unit?.address?.city?.name  :''} ${abit.militaryService_unit?.address?.city?.status?.name?? ''}`,
      militaryService_category:abit.militaryService_category,
      militaryService_dismissed:abit.militaryService_dismissed,
      militaryService_mobilization:abit.militaryService_mobilization,
      militaryService_collection:abit.militaryService_collection,
      militaryService_SVO:abit.militaryService_SVO?.name,
      militaryCommissariat:abit.militaryCommissariat?.name,
      militaryCommissariat_name:abit.militaryCommissariat?.name_official,
      militaryCommissariat_region:abit.militaryCommissariat?.region,
      militaryCommissariat_address:abit.militaryCommissariat?.address,
      militaryDistrict:abit.militaryCommissariat?.militaryDistrict?.abbreviation,
      militaryDistrict_name:abit.militaryCommissariat?.militaryDistrict?.name,
      establishedQuota:abit.establishedQuota?.name,
      establishedQuota_test:abit.establishedQuota_test,
      separateQuota:abit.separateQuota?.name,
      separateQuota_test:abit.separateQuota_test,
      priorityRight:abit.priorityRight?.name,
      priorityRight_test:abit.priorityRight_test,
      personal_achievements:abit.personal_achievements,
      recruitment:abit.recruitment,
      sign:abit.sign,
      admission_date_reg:abit.admission_date_reg,
      admission_date:abit.admission_date,
      admission_commission:abit.admission_commission?.name,
      admission_commission_region:abit.admission_commission?.region,
      admission_examination_group:abit.admission_examination_group?.name,
      admission_source_information:abit.admission_source_information,
      admission_note:abit.admission_note,
      specialty_military_commissariat:abit.specialty_military_commissariat?.abbreviation,
      specialty_1:abit.specialty_1?.abbreviation,
      faculty:abit.specialty_1?.faculty,
      specialty_2:abit.specialty_2?.abbreviation,
      specialty_3:abit.specialty_3?.abbreviation,
      specialty_admission:abit.specialty_admission?.abbreviation,
      expulsion_reason:abit.expulsion_reason?.abbreviation,
      expulsion_date:abit.expulsion_date,
      expulsion_note:abit.expulsion_note,
      cossack_society:abit.cossack_society?.name,
      document_secrets_access:abit.document_secrets_access,
      document_snils:abit.document_snils,
      document_inn:abit.document_inn,
      document_medical_certificate:abit.document_medical_certificate,
      document_ppo_group:abit.document_ppo_group,
      document_ppo_group_card:abit.document_ppo_group_card,
      document_mvd_availability:abit.document_mvd_availability,
      document_mvd_prosecution:abit.document_mvd_prosecution,
      document_passport_presence:abit.document_passport_presence,
      document_birthday_presence:abit.document_birthday_presence,
      document_education_presence:abit.document_education_presence,
      passport_series:abit.passport_series,
      passport_num:abit.passport_num,
      passport_birthplace:abit.passport_birthplace,
      passport_date_issue:abit.passport_date_issue,
      passport_issued_by:abit.passport_issued_by?.name,
      passport_department_code:abit.passport_issued_by?.department_code,
      education_category:abit.education_category?.name,
      education_date_end:abit.education_date_end,
      education_institute:abit.education_institute?.name,
      // неполно
      education_institute_address:abit.education_institute?.address?.region?.name,
      education_document:abit.education_document?.number,
      uncanceledEducation_category: abit.uncanceledEducation_category?.name,
      uncanceledEducation_date_admission: abit.uncanceledEducation_date_admission,        
      uncanceledEducation_date_end: abit.uncanceledEducation_date_end,      
      uncanceledEducation_period_study: abit.uncanceledEducation_period_study,      
      uncanceledEducation_course: abit.uncanceledEducation_course,      
      uncanceledEducation_semesters_end: abit.uncanceledEducation_semesters_end,      
      uncanceledEducation_institute: abit.uncanceledEducation_institute?.name,      
      // неполно
      uncanceledEducation_institute_address: abit.uncanceledEducation_institute?.address,      
      uncanceledEducation_note:abit.education_document,

      schoolMarks:abit.schoolMarks,

      egeMarks:abit.egeMarks,
      ege_math:abit.egeMarks?.find(ege => ege.subject?.name == 'Математика')?.mark,
      ege_rus:abit.egeMarks?.find(ege => ege.subject?.name == 'Русский язык')?.mark,
      ege_phiz:abit.egeMarks?.find(ege => ege.subject?.name == 'Физика')?.mark,
      ege_inf:abit.egeMarks?.find(ege => ege.subject?.name == 'Информатика')?.mark,
      ege_geo:abit.egeMarks?.find(ege => ege.subject?.name == 'География')?.mark,
      ege_hist:abit.egeMarks?.find(ege => ege.subject?.name == 'История')?.mark,
      ege_obsh:abit.egeMarks?.find(ege => ege.subject?.name == 'Обществознание')?.mark,

      entranceTest:abit.entranceTest,
      entrance_math:abit.entranceTest?.find(ege => ege.subject?.name == 'Математика')?.mark,
      entrance_rus:abit.entranceTest?.find(ege => ege.subject?.name == 'Русский язык')?.mark,
      entrance_phiz:abit.entranceTest?.find(ege => ege.subject?.name == 'Физика')?.mark,
      entrance_inf:abit.entranceTest?.find(ege => ege.subject?.name == 'Информатика')?.mark,
      entrance_geo:abit.entranceTest?.find(ege => ege.subject?.name == 'География')?.mark,
      entrance_hist:abit.entranceTest?.find(ege => ege.subject?.name == 'История')?.mark,
      entrance_obsh:abit.entranceTest?.find(ege => ege.subject?.name == 'Обществознание')?.mark,

      sport:abit.sport,
      sport_score_1:abit.sport[0]?.score,
      sport_score_2:abit.sport[1]?.score,
      sport_score_3:abit.sport[2]?.score,

      sport_date:abit.sport_date,
      qualificationExam_mark:abit.qualificationExam_mark,
      qualificationExam_results:abit.qualificationExam_results,
      qualificationExam_date:abit.qualificationExam_date,
      qualificationExam_group:abit.qualificationExam_group,
      arrivedFrom:abit.arrivedFrom?.abbreviation,
      arrivedFrom_name:abit.arrivedFrom?.name,
      goneIn:abit.goneIn?.abbreviation,
      goneIn_name:abit.goneIn?.name,
      call_number:abit.call_number,
      call_date:abit.call_date,
      call_result:abit.call_result,
      call_note:abit.call_note,
      collect_date_admission:abit.collect_date_admission,
      collect_food:abit.collect_food,
      createdAt:abit.createdAt,
      
    }))

    return fullAbits
  }

  async create(abitDetails: CreateAbitDto): Promise<AbitEntity> {
    const newAbit = this.abitRepository.create(abitDetails);
    
    const abits = await this.abitRepository.find({});
    const filteredAbits =
      abits.filter(
        (abit) =>
          abit.lastName.charAt(0).toUpperCase() ===
          newAbit.lastName.charAt(0).toUpperCase(),
      )

    if (filteredAbits[0] !== undefined){
      const maxCount = Math.max(...filteredAbits.map(item => parseInt(item.personal_file_number_count.slice(2,5),10)))
      newAbit.personal_file_number_count = `${newAbit.lastName
        .charAt(0)
        .toUpperCase()}-${String(maxCount + 1).padStart(3,"0")}`;
      newAbit.personal_file_number = `${newAbit.lastName
        .charAt(0)
        .toUpperCase()}-${maxCount + 1}`;
    } else {
      newAbit.personal_file_number_count = `${newAbit.lastName
        .charAt(0)
        .toUpperCase()}-${String(1).padStart(3,"0")}`;
      newAbit.personal_file_number = `${newAbit.lastName
        .charAt(0)
        .toUpperCase()}-${1}`;
    }

    return this.abitRepository.save(newAbit);
  } 

  update(
    criteria: FindOptionsWhere<AbitEntity>,
    partialEntity: QueryDeepPartialEntity<AbitEntity>,
  ) {
    return this.abitRepository.update(criteria, partialEntity);
  }

  async updatePersonalFileNumber(abit: AbitEntity, abitLastName:string
  ) {
    const abits = await this.abitRepository.find({});
    const newAbit = await this.abitRepository.findOne({where:{id:abit.id}})
    const filteredAbits =
      abits.filter(
        (abit) =>
          abit.lastName.charAt(0).toUpperCase() ===
          abitLastName.charAt(0).toUpperCase(),
      )

    if (filteredAbits[0] !== undefined){
      const maxCount = Math.max(...filteredAbits.map(item => parseInt(item.personal_file_number_count.slice(2,5),10)))
      newAbit.personal_file_number_count = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${String(maxCount + 1).padStart(3,"0")}`;
      newAbit.personal_file_number = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${maxCount + 1}`;
    } else {
      newAbit.personal_file_number_count = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${String(1).padStart(3,"0")}`;
      newAbit.personal_file_number = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${1}`;
    }
    return newAbit
  }

  // delete(criteria: FindOptionsWhere<AbitEntity>) {
  //   return this.abitRepository.delete(criteria); 
  // }

  
}
