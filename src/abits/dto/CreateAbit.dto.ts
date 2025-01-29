import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'
import {
  AdmissionSourceInfoType,
  DocumentEducationData,
  FamilyStatusType,
  GenderType,
  LdType,
  MedType,
  MilitaryServiceCategory,
  MvdType,
  PpoType,
  RecruitmentType,
  SCType,
  SecretAccessType,
  SignType,
} from '../entity/abit.entity'

export class CreateAbitDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsOptional()
  @IsString()
  surName: string

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  birthday: Date

  @IsOptional()
  @IsString()
  note: string

  @IsOptional()
  @IsEnum(GenderType)
  gender: GenderType

  // @IsOptional()
  // @IsString()
  // residence: string;

  @IsOptional()
  @IsEnum(SCType)
  secondCitizenship: SCType

  @IsOptional()
  @IsString()
  personal_file_number: string

  @IsOptional()
  @IsString()
  personal_file_number_count: string

  @IsOptional()
  @IsString()
  personal_file_reg: string

  @IsOptional()
  @IsDateString()
  personal_file_date_reg: Date

  // @IsOptional()
  // @IsNumber()
  // personal_file_arm: number;

  @IsOptional()
  @IsEnum(LdType)
  personal_file_existence: LdType

  @IsOptional()
  @IsEnum(FamilyStatusType)
  family_status: FamilyStatusType

  @IsOptional()
  @IsNumber()
  family_childrens: number

  @IsOptional()
  @IsNumber()
  abit_childrens: number

  @IsOptional()
  @IsDateString()
  admission_date: Date

  @IsOptional()
  @IsDateString()
  admission_date_reg: Date

  @IsOptional()
  @IsArray()
  admission_source_information: AdmissionSourceInfoType[]

  @IsOptional()
  @IsString()
  personal_number: string

  @IsOptional()
  @IsBoolean()
  personal_number_giving: boolean

  @IsOptional()
  @IsEnum(SecretAccessType)
  document_secrets_access: SecretAccessType

  @IsOptional()
  @IsString()
  document_snils: string

  @IsOptional()
  @IsString()
  document_inn: string

  @IsOptional()
  @IsEnum(MedType)
  document_medical_certificate: MedType

  @IsOptional()
  @IsEnum(PpoType)
  document_ppo_group: PpoType

  @IsOptional()
  @IsBoolean()
  document_passport_presence: boolean

  @IsOptional()
  @IsBoolean()
  document_birthday_presence: boolean

  @IsOptional()
  @IsBoolean()
  document_education_presence: boolean

  @IsOptional()
  @IsEnum(MvdType)
  document_mvd_availability: MvdType

  @IsOptional()
  @IsArray()
  document_mvd_prosecution: string[]

  @IsOptional()
  @IsEnum(PpoType)
  ppo_group: PpoType

  @IsOptional()
  @IsBoolean()
  priorityRight_test: boolean

  @IsOptional()
  @IsBoolean()
  separateQuota_test: boolean

  @IsOptional()
  @IsBoolean()
  establishedQuota_test: boolean

  @IsOptional()
  @IsNumber()
  sport_score: number

  @IsOptional()
  @IsEnum(RecruitmentType)
  recruitment: RecruitmentType

  @IsOptional()
  @IsEnum(SignType)
  sign: SignType

  @IsOptional()
  @IsNumber()
  qualificationExam_mark: number

  @IsOptional()
  @IsArray()
  qualificationExam_results: string[]

  @IsOptional()
  @IsString()
  call_number: string

  @IsOptional()
  @IsDateString()
  call_date: Date

  @IsOptional()
  @IsString()
  call_result: string

  @IsOptional()
  @IsString()
  call_note: string

  @IsOptional()
  @IsDateString()
  collect_date_admission: Date

  @IsOptional()
  @IsBoolean()
  collect_food: boolean

  @IsOptional()
  @IsString()
  family_address: string

  @IsOptional()
  @IsString()
  militaryService_post: string

  @IsOptional()
  @IsEnum(MilitaryServiceCategory)
  militaryService_category: MilitaryServiceCategory

  @IsOptional()
  @IsBoolean()
  militaryService_dismissed: boolean

  @IsOptional()
  @IsBoolean()
  militaryService_mobilization: boolean

  @IsOptional()
  @IsBoolean()
  militaryService_collection: boolean

  @IsOptional()
  @IsString()
  expulsion_note: string

  @IsOptional()
  @IsDateString()
  expulsion_date: Date

  @IsOptional()
  @IsBoolean()
  document_ppo_group_card: boolean

  @IsOptional()
  @IsString()
  passport_series: string

  @IsOptional()
  @IsString()
  passport_num: string

  @IsOptional()
  @IsString()
  passport_birthplace: string

  @IsOptional()
  @IsDateString()
  passport_date_issue: Date

  @IsOptional()
  @IsString()
  passport_department_code: string

  @IsOptional()
  @IsJSON()
  education_document: DocumentEducationData

  @IsOptional()
  @IsDateString()
  education_date_end: Date

  @IsOptional()
  @IsDateString()
  uncanceledEducation_date_admission: Date

  @IsOptional()
  @IsDateString()
  uncanceledEducation_date_end: Date

  @IsOptional()
  @IsNumber()
  uncanceledEducation_semesters_end: number

  @IsOptional()
  @IsNumber()
  uncanceledEducation_course: number

  @IsOptional()
  @IsString()
  uncanceledEducation_period_study: string

  @IsOptional()
  @IsString()
  uncanceledEducation_note: string

  @IsOptional()
  @IsDateString()
  sport_date: Date

  @IsOptional()
  @IsDateString()
  qualificationExam_date: Date

  @IsOptional()
  @IsString()
  qualificationExam_group: string
}
