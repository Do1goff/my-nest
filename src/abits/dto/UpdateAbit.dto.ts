import {
    IsBoolean,
    IsDate,
    IsDateString,
    IsEnum,
    IsJSON,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator'
import {
    AdmissionSourceInfoType,
    ExpulsionData,
    FamilyStatusType,
    GenderType,
    LdType,
    MilitaryServiceData,
    MvdProsecutionType,
    PassportData,
    PersonalData,
    PpoType,
    SecretAccessType,
} from '../entity/abit.entity'

export class CreateAbitDto {
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  surName: string;

  @IsDateString()
  birthday: Date;

  @IsOptional()
  @IsEnum(GenderType)
  gender: GenderType;

  @IsOptional()
  @IsPhoneNumber()
  telephone: string;

  @IsString()
  residence: string;

  @IsString()
  personal_file_number: string;

  @IsString()
  personal_file_reg: string;

  @IsDate()
  personal_file_date_reg: Date;

  @IsNumber()
  personal_file_arm: number;

  @IsEnum(LdType)
  personal_file_existence: LdType;

  @IsString()
  personal_number: string;

  @IsBoolean()
  personal_number_giving: boolean;

  // @IsString()
  // quota:string

  // @IsString()
  // exemption:string

  // @IsString()
  // personal_achievements:string

  @IsEnum(FamilyStatusType)
  family_status: FamilyStatusType;

  @IsString()
  family_address: string;

  @IsString()
  family_social_status: string;

  @IsString()
  family_childrens: number;

  @IsString()
  abit_childrens: number;

  // @IsJSON()
  // family_childrens: ChildrenData

  @IsJSON()
  mother: PersonalData;

  @IsBoolean()
  mother_fail: boolean;

  @IsJSON()
  father: PersonalData;

  @IsBoolean()
  father_fail: boolean;

  @IsDate()
  admission_date: Date;

  // @IsString()
  // admission_commission:string

  // @IsString()
  // admission_examination_group:string

  @IsEnum(AdmissionSourceInfoType)
  admission_source_information: AdmissionSourceInfoType;

  @IsString()
  admission_note: string;

  @IsString()
  expulsion_reason: string;

  @IsJSON()
  expulsion: ExpulsionData;

  // @IsString()
  // specialty_military_commissariat: string

  // @IsString()
  // specialty_1:string

  // @IsString()
  // specialty_2:string

  // @IsString()
  // specialty_3:string

  // @IsString()
  // specialty_admission:string

  @IsJSON()
  military_service: MilitaryServiceData;

  @IsEnum(SecretAccessType)
  document_secrets_access: SecretAccessType;

  @IsString()
  document_snils: string;

  @IsString()
  document_inn: string;

  @IsBoolean()
  document_medical_certificate: boolean;

  @IsEnum(PpoType)
  document_ppo_group: PpoType;

  @IsJSON()
  document_passport: PassportData;

  @IsBoolean()
  document_mvd_availability: boolean;

  @IsEnum(MvdProsecutionType)
  document_mvd_prosecution?: MvdProsecutionType;
}
