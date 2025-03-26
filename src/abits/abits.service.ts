import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import { RegionsEntity } from 'src/locations/entity/regions.entity'
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
    @InjectRepository(RegionsEntity)
    private regionRepository: Repository<RegionsEntity>,
  ) {}

  find(options?: FindManyOptions<AbitEntity>): Promise<AbitEntity[]> {
    return this.abitRepository.find(options)
  }

  findOne(options: FindOneOptions<AbitEntity>): Promise<AbitEntity> {
    return this.abitRepository.findOne(options)
  }

  async getFullAbits() {
    const regions = await this.regionRepository.find({
      relations: {
        status: true,
      },
    })
    const abits = await this.abitRepository.find({
      relations: {
        nationality: true,
        family_social_status: true,
        militaryService_rank: true,
        militaryService_place: true,
        militaryService_SVO: true,
        militaryCommissariat: true,
        establishedQuota: true,
        separateQuota: true,
        priorityRight: true,
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
        uncanceledEducation_category: true,
        arrivedFrom: true,

        telephone: true,
        family: true,
        residence: true,
      },
      join: {
        alias: 'abit',
        leftJoinAndSelect: {
          personal_achievements: 'abit.personal_achievements',
          achievements_name: 'personal_achievements.achievement',
          ege: 'abit.egeMarks',
          ege_subject: 'ege.subject',
          entrance: 'abit.entranceTest',
          entrance_subject: 'entrance.subject',
          school: 'abit.schoolMarks',
          school_subject: 'school.subject',
          nationality: 'abit.nationality',
          sport: 'abit.sport',
          exercise: 'sport.exercises',
          residence: 'abit.residence',
          residence_status: 'residence.status',
          residence_district: 'residence.district',
          residence_region: 'residence.region',
          education_institute: 'abit.education_institute',
          uncanceledEducation_institute: 'abit.uncanceledEducation_institute',
          militaryService_unit: 'abit.militaryService_unit',
          militaryCommissariat: 'abit.militaryCommissariat',
          militaryDistrict: 'militaryCommissariat.militaryDistrict',
        },
      },
    })

    const fullAbits = abits.map((abit) => ({
      id: abit.id,
      lastName: abit.lastName,
      firstName: abit.firstName,
      surName: abit.surName,
      birthday: abit.birthday,
      age:
        abit.birthday.getMonth() - 7 >= 0
          ? new Date().getFullYear() - abit.birthday.getFullYear()
          : new Date().getFullYear() - abit.birthday.getFullYear() - 1,
      note: abit.note,
      nationality: abit.nationality?.name,
      gender: abit.gender,
      telephone: abit.telephone,
      phone_1: abit.telephone[0]?.number,
      phone_2: abit.telephone[1]?.number,
      region_date_admission: regions.find(
        (reg) => reg.region == abit.militaryCommissariat?.region,
      )?.date_admission,
      residence: abit.residence,
      residence_region: abit.residence?.region?.name,
      residence_name: `${
        abit.residence?.region?.statusInEnd
          ? (abit.residence?.region?.name ?? '')
          : (abit.residence?.region?.status ?? '')
      } ${
        abit.residence?.region?.statusInEnd
          ? (abit.residence?.region?.status ?? '')
          : (abit.residence?.region?.name ?? '')
      } ${
        abit.residence?.district?.statusInEnd
          ? (abit.residence?.district?.name ?? '')
          : (abit.residence?.district?.status?.name ?? '')
      } ${
        abit.residence?.district?.statusInEnd
          ? (abit.residence?.district?.status ?? '')
          : (abit.residence?.district?.name ?? '')
      } ${abit.residence?.name ?? ''} ${abit.residence?.status?.name ?? ''}
            `,
      region: `${abit.residence?.region?.name}`,
      secondCitizenship: abit.secondCitizenship,
      personal_file_number: abit.personal_file_number,
      personal_file_number_count: abit.personal_file_number_count,
      personal_file_reg: abit.personal_file_reg,
      personal_file_date_reg: abit.personal_file_date_reg,
      personal_file_reg_MC: abit.personal_file_reg_MC,
      personal_file_date_reg_MC: abit.personal_file_date_reg_MC,
      personal_file_existence: abit.personal_file_existence,
      personal_file_fulled: abit.personal_file_fulled,
      personal_file_arm: abit.personal_file_arm,
      personal_file_get: abit.personal_file_get,
      family_status: abit.family_status,
      family_address: abit.family_address,
      family_social_status: abit.family_social_status?.name,
      family_childrens: abit.family_childrens,
      abit_childrens: abit.abit_childrens,

      family: abit.family,
      father_lastName: abit.family?.find((member) => member.kinship == 'Отец')
        ?.lastName,
      father_lastName_second: abit.family?.find(
        (member) => member.kinship == 'Отец',
      )?.lastName_second,
      father_firstName: abit.family?.find((member) => member.kinship == 'Отец')
        ?.firstName,
      father_surName: abit.family?.find((member) => member.kinship == 'Отец')
        ?.surName,
      father_birthday: abit.family?.find((member) => member.kinship == 'Отец')
        ?.birthday,
      father_fail: abit.family?.find((member) => member.kinship == 'Отец')
        ?.fail,
      father_status: abit.family?.find((member) => member.kinship == 'Отец')
        ?.status,
      mother_lastName: abit.family?.find((member) => member.kinship == 'Мать')
        ?.lastName,
      mother_lastName_second: abit.family?.find(
        (member) => member.kinship == 'Мать',
      )?.lastName_second,
      mother_firstName: abit.family?.find((member) => member.kinship == 'Мать')
        ?.firstName,
      mother_surName: abit.family?.find((member) => member.kinship == 'Мать')
        ?.surName,
      mother_birthday: abit.family?.find((member) => member.kinship == 'Мать')
        ?.birthday,
      mother_fail: abit.family?.find((member) => member.kinship == 'Мать')
        ?.fail,
      mother_status: abit.family?.find((member) => member.kinship == 'Мать')
        ?.status,
      personal_number: abit.personal_number,
      personal_number_giving: abit.personal_number_giving,
      militaryService_rank: abit.militaryService_rank?.name,
      militaryService_rank_genitive: abit.militaryService_rank?.genitive,
      militaryService_post: abit.militaryService_post,
      militaryService_post_genitive: abit.militaryService_post_genitive,
      militaryService_place: abit.militaryService_place?.abbreviation,
      militaryService_place_name: abit.militaryService_place?.name,
      militaryService_place_genitive: abit.militaryService_place?.genitive,
      militaryService_unit: abit.militaryService_unit?.name,
      militaryService_unit_address: abit.militaryService_unit?.address,
      militaryService_unit_mail: abit.militaryService_unit?.mail,
      militaryService_category: abit.militaryService_category,
      militaryService_dismissed: abit.militaryService_dismissed,
      militaryService_mobilization: abit.militaryService_mobilization,
      militaryService_collection: abit.militaryService_collection,
      militaryService_SVO: abit.militaryService_SVO?.name,
      militaryCommissariat: abit.militaryCommissariat?.name,
      militaryCommissariat_region: abit.militaryCommissariat?.region,
      militaryCommissariat_region_address: abit.militaryCommissariat
        ? `${
            regions.find(
              (reg) => reg.region == abit.militaryCommissariat?.region,
            )?.statusInEnd
              ? (regions.find(
                  (reg) => reg.region == abit.militaryCommissariat?.region,
                )?.name ?? '')
              : (regions.find(
                  (reg) => reg.region == abit.militaryCommissariat?.region,
                )?.status.name ?? '')
          } ${
            regions.find(
              (reg) => reg.region == abit.militaryCommissariat?.region,
            )?.statusInEnd
              ? (regions.find(
                  (reg) => reg.region == abit.militaryCommissariat?.region,
                )?.status.name ?? '')
              : (regions.find(
                  (reg) => reg.region == abit.militaryCommissariat?.region,
                )?.name ?? '')
          }`
        : '',

      militaryCommissariat_address: abit.militaryCommissariat?.address,
      militaryDistrict:
        abit.militaryCommissariat?.militaryDistrict?.abbreviation,
      militaryDistrict_name: abit.militaryCommissariat?.militaryDistrict?.name,
      establishedQuota: abit.establishedQuota?.name,
      establishedQuota_text: abit.establishedQuota?.text,
      establishedQuota_code: abit.establishedQuota?.code,
      establishedQuota_id: abit.establishedQuota?.id,
      establishedQuota_test: abit.establishedQuota_test,
      separateQuota: abit.separateQuota?.name,
      separateQuota_text: abit.separateQuota?.text,
      separateQuota_code: abit.separateQuota?.code,
      separateQuota_id: abit.separateQuota?.id,
      separateQuota_test: abit.separateQuota_test,
      priorityRight: abit.priorityRight?.name,
      priorityRight_text: abit.priorityRight?.text,
      priorityRight_test: abit.priorityRight_test,

      personal_achievements: abit.personal_achievements,
      personal_achievements_score: Math.min(
        abit.personal_achievements
          .map((achievement) =>
            achievement.test ? achievement.achievement.value : 0,
          )
          .reduce(function (a, b) {
            return a + b
          }, 0),
        10,
      ),

      recruitment: abit.recruitment,
      sign: abit.sign,
      admission_date_reg: abit.admission_date_reg,
      admission_date: abit.admission_date,
      admission_commission: abit.admission_commission?.name,
      admission_commission_region: abit.admission_commission?.region,
      admission_examination_group: abit.admission_examination_group?.name,
      admission_source_information: abit.admission_source_information,
      specialty_military_commissariat:
        abit.specialty_military_commissariat?.abbreviation,
      faculty_MC: abit.specialty_military_commissariat?.faculty,
      specialty_1: abit.specialty_1?.abbreviation,
      specialty: abit.specialty_1,
      faculty: abit.specialty_1?.faculty,
      specialty_2: abit.specialty_2?.abbreviation,
      specialty_3: abit.specialty_3?.abbreviation,
      specialty_4: abit.specialty_4?.abbreviation,
      specialty_5: abit.specialty_5?.abbreviation,
      specialty_admission: abit.specialty_admission?.abbreviation,
      expulsion_reason: abit.expulsion_reason?.abbreviation,
      expulsion_date: abit.expulsion_date,
      expulsion_note: abit.expulsion_note,
      cossack_society: abit.cossack_society?.name,
      document_secrets_access: abit.document_secrets_access,
      document_snils: abit.document_snils,
      document_inn: abit.document_inn,
      document_medical_certificate: abit.document_medical_certificate,
      document_ppo_group: abit.document_ppo_group,
      document_ppo_group_card: abit.document_ppo_group_card,
      document_mvd_availability: abit.document_mvd_availability,
      document_mvd_prosecution: abit.document_mvd_prosecution,
      document_passport_presence: abit.document_passport_presence,
      document_birthday_presence: abit.document_birthday_presence,
      document_education_presence: abit.document_education_presence,
      passport_series: abit.passport_series,
      passport_num: abit.passport_num,
      passport_birthplace: abit.passport_birthplace,
      passport_date_issue: abit.passport_date_issue,
      passport_issued_by: abit.passport_issued_by?.name,
      passport_department_code: abit.passport_issued_by?.department_code,
      education_category: abit.education_category?.name,
      education_category_abbreviation: abit.education_category?.abbreviation,
      education_category_level: abit.education_category?.level,
      education_date_end: abit.education_date_end,
      education_institute: abit.education_institute?.name,
      education_institute_id: abit.education_institute?.id,
      education_institute_address: abit.education_institute?.address,
      education_institute_abbreviation: abit.education_institute?.abbreviation,
      education_document: abit.education_document?.number,
      uncanceledEducation_category: abit.uncanceledEducation_category?.name,
      uncanceledEducation_category_level:
        abit.uncanceledEducation_category?.level,
      uncanceledEducation_date_admission:
        abit.uncanceledEducation_date_admission,
      uncanceledEducation_date_end: abit.uncanceledEducation_date_end,
      uncanceledEducation_period_study: abit.uncanceledEducation_period_study,
      uncanceledEducation_course: abit.uncanceledEducation_course,
      uncanceledEducation_semesters_end: abit.uncanceledEducation_semesters_end,
      uncanceledEducation_institute: abit.uncanceledEducation_institute?.name,
      uncanceledEducation_institute_address:
        abit.uncanceledEducation_institute?.address,
      uncanceledEducation_note: abit.education_document,

      schoolMarks: abit.schoolMarks,

      egeMarks: abit.egeMarks,
      ege_math: abit.egeMarks?.find((ege) => ege.subject?.name == 'Математика')
        ?.mark,
      ege_rus: abit.egeMarks?.find((ege) => ege.subject?.name == 'Русский язык')
        ?.mark,
      ege_phiz: abit.egeMarks?.find((ege) => ege.subject?.name == 'Физика')
        ?.mark,
      ege_inf: abit.egeMarks?.find((ege) => ege.subject?.name == 'Информатика')
        ?.mark,
      ege_geo: abit.egeMarks?.find((ege) => ege.subject?.name == 'География')
        ?.mark,
      ege_hist: abit.egeMarks?.find((ege) => ege.subject?.name == 'История')
        ?.mark,
      ege_obsh: abit.egeMarks?.find(
        (ege) => ege.subject?.name == 'Обществознание',
      )?.mark,

      entranceTest: abit.entranceTest,
      entrance_math: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'Математика',
      )?.mark,
      entrance_rus: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'Русский язык',
      )?.mark,
      entrance_phiz: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'Физика',
      )?.mark,
      entrance_inf: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'Информатика',
      )?.mark,
      entrance_geo: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'География',
      )?.mark,
      entrance_hist: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'История',
      )?.mark,
      entrance_obsh: abit.entranceTest?.find(
        (ege) => ege.subject?.name == 'Обществознание',
      )?.mark,

      sport: abit.sport,
      sport_score_1: abit.sport[0]?.score,
      sport_score_2: abit.sport[1]?.score,
      sport_score_3: abit.sport[2]?.score,
      sport_score: abit.sport[2]?.score
        ? Math.max(
            Math.min(
              abit.sport[0]?.score +
                abit.sport[1]?.score +
                abit.sport[2]?.score -
                ((abit.birthday.getMonth() - 7 >= 0
                  ? new Date().getFullYear() - abit.birthday.getFullYear()
                  : new Date().getFullYear() -
                    abit.birthday.getFullYear() -
                    1) < 25
                  ? 95
                  : 85),
              100,
            ),
            0,
          )
        : null,

      sport_date: abit.sport_date,
      qualificationExam_mark: abit.qualificationExam_mark,
      qualificationExam_results: abit.qualificationExam_results,
      qualificationExam_date: abit.qualificationExam_date,
      qualificationExam_group: abit.qualificationExam_group,
      arrivedFrom: abit.arrivedFrom?.abbreviation,
      arrivedFrom_name: abit.arrivedFrom?.name,
      goneIn: abit.goneIn,
      call_number: abit.call_number,
      call_date: abit.call_date,
      call_result: abit.call_result,
      call_note: abit.call_note,
      collect_date_admission: abit.collect_date_admission,
      collect_food: abit.collect_food,
      contact_date: abit.contact_date,
      contact_result: abit.contact_result,

      createdAt: abit.createdAt,
    }))
    const ratingAbits = fullAbits.map((abit) => ({
      ...abit,
      rating:
        abit.personal_achievements_score +
        abit.sport_score +
        Math.max(abit.ege_rus ?? 0, abit.entrance_rus ?? 0) +
        Math.max(
          abit.egeMarks.find(
            (ege) => ege.subject?.name == abit.specialty?.egeSubject_1,
          )?.mark ?? 0,
          abit.entranceTest.find(
            (ege) => ege.subject?.name == abit.specialty?.egeSubject_1,
          )?.mark ?? 0,
        ) +
        Math.max(
          Math.max(
            abit.egeMarks.find(
              (ege) => ege.subject?.name == abit.specialty?.egeSubject_2,
            )?.mark ?? 0,
            abit.entranceTest.find(
              (ege) => ege.subject?.name == abit.specialty?.egeSubject_2,
            )?.mark ?? 0,
          ),
          Math.max(
            abit.egeMarks.find(
              (ege) => ege.subject?.name == abit.specialty?.egeSubject_3,
            )?.mark ?? 0,
            abit.entranceTest.find(
              (ege) => ege.subject?.name == abit.specialty?.egeSubject_3,
            )?.mark ?? 0,
          ),
          Math.max(
            abit.egeMarks.find(
              (ege) => ege.subject?.name == abit.specialty?.egeSubject_4,
            )?.mark ?? 0,
            abit.entranceTest.find(
              (ege) => ege.subject?.name == abit.specialty?.egeSubject_4,
            )?.mark ?? 0,
          ),
        ),
    }))
    return ratingAbits
  }

  async create(abitDetails: CreateAbitDto): Promise<AbitEntity> {
    const newAbit = this.abitRepository.create(abitDetails)
    if (abitDetails.personal_file_get) {
      newAbit.personal_file_arm = await this.updatePersonalFileArm()
      const abits = await this.abitRepository.find({})
      const filteredAbits = abits.filter(
        (abit) =>
          abit.lastName.charAt(0).toUpperCase() ===
          newAbit.lastName.charAt(0).toUpperCase(),
      )

      if (filteredAbits[0] !== undefined) {
        const maxCount = Math.max(
          ...filteredAbits.map((item) =>
            parseInt(item.personal_file_number_count.slice(2, 5), 10),
          ),
        )
        newAbit.personal_file_number_count = `${newAbit.lastName
          .charAt(0)
          .toUpperCase()}-${String(maxCount + 1).padStart(3, '0')}`
        newAbit.personal_file_number = `${newAbit.lastName
          .charAt(0)
          .toUpperCase()}-${maxCount + 1}`
      } else {
        newAbit.personal_file_number_count = `${newAbit.lastName
          .charAt(0)
          .toUpperCase()}-${String(1).padStart(3, '0')}`
        newAbit.personal_file_number = `${newAbit.lastName
          .charAt(0)
          .toUpperCase()}-${1}`
      }
    } else {
      newAbit.personal_file_number_count = ` -0`
      newAbit.personal_file_number = ` -0`
    }

    return this.abitRepository.save(newAbit)
  }

  update(
    criteria: FindOptionsWhere<AbitEntity>,
    partialEntity: QueryDeepPartialEntity<AbitEntity>,
  ) {
    return this.abitRepository.update(criteria, partialEntity)
  }

  async updatePersonalFileNumber(abit: AbitEntity, abitLastName: string) {
    const abits = await this.abitRepository.find({})
    const newAbit = await this.abitRepository.findOne({
      where: { id: abit.id },
    })
    const filteredAbits = abits.filter(
      (abit) =>
        abit.lastName.charAt(0).toUpperCase() ===
        abitLastName.charAt(0).toUpperCase(),
    )

    if (filteredAbits[0] !== undefined) {
      const maxCount = Math.max(
        ...filteredAbits.map((item) =>
          parseInt(item.personal_file_number_count.slice(2, 5), 10),
        ),
      )
      newAbit.personal_file_number_count = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${String(maxCount + 1).padStart(3, '0')}`
      newAbit.personal_file_number = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${maxCount + 1}`
    } else {
      newAbit.personal_file_number_count = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${String(1).padStart(3, '0')}`
      newAbit.personal_file_number = `${abitLastName
        .charAt(0)
        .toUpperCase()}-${1}`
    }
    return newAbit
  }
  async updatePersonalFileArm() {
    const abits = await this.abitRepository.find({})
    let arm = Math.max(
      ...abits.map((abit) =>
        abit.personal_file_arm ? abit.personal_file_arm : 0,
      ),
    )
    return arm + 1
  }

  delete(criteria: FindOptionsWhere<AbitEntity>) {
    return this.abitRepository.delete(criteria)
  }
}
