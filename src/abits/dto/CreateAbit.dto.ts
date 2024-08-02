import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'
import {
  AdmissionSourceInfoType,
  ExpulsionData,
  FamilyStatusType,
  GenderType,
  LdType,
  MedType,
  MvdType,
  PassportData,
  PpoType,
  RecruitmentType,
  SCType,
  SecretAccessType,
  SignType
} from '../entity/abit.entity'

export class CreateAbitDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  @IsString()
  surName: string;

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  birthday: Date;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsEnum(GenderType)
  gender: GenderType;

  // @IsOptional()
  // @IsString()
  // residence: string;

  @IsOptional()
  @IsEnum(SCType)
  secondCitizenship: SCType;

  @IsOptional()
  @IsString()
  personal_file_number: string;

  @IsOptional()
  @IsString()
  personal_file_reg: string;

  @IsOptional()
  @IsDateString()
  personal_file_date_reg: Date;

  @IsOptional()
  @IsNumber()
  personal_file_arm: number;

  @IsOptional()
  @IsEnum(LdType)
  personal_file_existence: LdType;
  
  @IsOptional()
  @IsEnum(FamilyStatusType)
  family_status: FamilyStatusType;

  // @IsOptional()
  // @IsString()
  // family_address: string;

  @IsOptional()
  @IsNumber()
  family_childrens: number;

  @IsOptional()
  @IsNumber()
  abit_childrens: number;
  
  @IsOptional()
  @IsDateString()
  admission_date: Date;
  
  @IsOptional()
  @IsArray()
  admission_source_information: AdmissionSourceInfoType[];

  @IsOptional()
  @IsString()
  admission_note: string;
  
  @IsOptional()
  @IsString()
  expulsion: ExpulsionData;
  
  @IsOptional()
  @IsString()
  personal_number: string;

  @IsOptional()
  @IsBoolean()
  personal_number_giving: boolean;
  
  // @IsOptional()
  // @IsJSON()
  // militaryService: MilitaryServiceData;
  
  @IsOptional()
  @IsEnum(SecretAccessType)
  document_secrets_access: SecretAccessType;
 
  @IsOptional()
  @IsString()
  document_snils: string;

  @IsOptional()
  @IsString()
  document_inn: string;

  @IsOptional()
  @IsEnum(MedType)
  document_medical_certificate: MedType;

  @IsOptional()
  @IsEnum(PpoType)
  document_ppo_group: PpoType;

  @IsOptional()
  @IsJSON()
  document_passport: PassportData;

  // @IsOptional()
  // @IsJSON()
  // education: EducationData;

  // @IsOptional()
  // @IsJSON()
  // uncanceledEducation: UncanceledEducationData;

  @IsOptional()
  @IsBoolean()
  document_passport_presence: boolean;

  @IsOptional()
  @IsBoolean()
  document_birthday_presence: boolean;

  @IsOptional()
  @IsBoolean()
  document_education_presence: boolean;

  @IsOptional()
  @IsEnum(MvdType)
  document_mvd_availability: MvdType;

  @IsOptional()
  @IsArray()
  document_mvd_prosecution: string[];

  @IsOptional()
  @IsEnum(PpoType)
  ppo_group: PpoType;

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
  @IsEnum(RecruitmentType)
  recruitment: RecruitmentType

  @IsOptional()
  @IsEnum(SignType)
  sign: SignType
}
