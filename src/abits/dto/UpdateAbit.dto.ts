// import {
//   IsArray,
//   IsBoolean,
//   IsDateString,
//   IsEnum,
//   IsJSON,
//   IsNotEmpty,
//   IsNumber,
//   IsOptional,
//   IsPhoneNumber,
//   IsString
// } from 'class-validator'
// import {
//   ExpulsionData,
//   FamilyStatusType,
//   GenderType,
//   LdType,
//   PassportData,
//   PpoType,
//   SecretAccessType
// } from '../entity/abit.entity'

// export class CreateAbitDto {
//   @IsOptional()
//   @IsString()
//   @IsNotEmpty()
//   lastName: string;

//   @IsOptional()
//   @IsString()
//   @IsNotEmpty()
//   firstName: string;

//   @IsOptional()
//   @IsString()
//   surName: string;

//   @IsOptional()
//   @IsDateString()
//   @IsNotEmpty()
//   birthday: Date;

//   @IsOptional()
//   @IsString()
//   note: string;

//   @IsOptional()
//   @IsEnum(GenderType)
//   gender: GenderType;

//   @IsOptional()
//   @IsPhoneNumber()
//   telephone: string;

//   @IsOptional()
//   @IsPhoneNumber()
//   telephone2: string;

//   @IsOptional()
//   @IsString()
//   telephone_note: string

//   @IsOptional()
//   @IsString()
//   residence: string;

//   @IsOptional()
//   @IsString()
//   secondCitizenship: string;

//   @IsOptional()
//   @IsString()
//   personal_file_number: string;

//   @IsOptional()
//   @IsString()
//   personal_file_reg: string;

//   @IsOptional()
//   @IsDateString()
//   personal_file_date_reg: Date;

//   @IsOptional()
//   @IsNumber()
//   personal_file_arm: number;

//   @IsOptional()
//   @IsEnum(LdType)
//   personal_file_existence: LdType;
  
//   @IsOptional()
//   @IsEnum(FamilyStatusType)
//   family_status: FamilyStatusType;

//   @IsOptional()
//   @IsString()
//   family_address: string;

//   @IsOptional()
//   @IsString()
//   family_social_status: string;

//   @IsOptional()
//   @IsNumber()
//   family_childrens: number;

//   @IsOptional()
//   @IsNumber()
//   abit_childrens: number;

//   @IsOptional()
//   @IsBoolean()
//   mother_fail: boolean;
  

//   @IsOptional()
//   @IsBoolean()
//   father_fail: boolean;
  
//   @IsOptional()
//   @IsDateString()
//   admission_date: Date;
  
//   @IsOptional()
//   @IsArray()
//   admission_source_information: string[];

//   @IsOptional()
//   @IsString()
//   admission_note: string;
  
//   @IsOptional()
//   @IsString()
//   expulsion: ExpulsionData;
  
//   @IsOptional()
//   @IsString()
//   personal_number: string;

//   @IsOptional()
//   @IsBoolean()
//   personal_number_giving: boolean;
  
//   // @IsOptional()
//   // @IsJSON()
//   // militaryService: MilitaryServiceData;
  
//   @IsOptional()
//   @IsEnum(SecretAccessType)
//   document_secrets_access: SecretAccessType;

//   @IsOptional()
//   @IsString()
//   document_snils: string;

//   @IsOptional()
//   @IsString()
//   document_inn: string;

//   @IsOptional()
//   @IsBoolean()
//   document_medical_certificate: boolean;

//   @IsOptional()
//   @IsEnum(PpoType)
//   document_ppo_group: PpoType;

//   @IsOptional()
//   @IsJSON()
//   document_passport: PassportData;

//   // @IsOptional()
//   // @IsJSON()
//   // education: EducationData;

//   // @IsOptional()
//   // @IsJSON()
//   // uncanceledEducation: UncanceledEducationData;

//   @IsOptional()
//   @IsBoolean()
//   document_passport_presence: boolean;

//   @IsOptional()
//   @IsBoolean()
//   document_birthday_presence: boolean;

//   @IsOptional()
//   @IsBoolean()
//   document_education_presence: boolean;

//   @IsOptional()
//   @IsBoolean()
//   document_mvd_availability: boolean;

//   @IsOptional()
//   @IsEnum(MvdProsecutionType)
//   document_mvd_prosecution?: MvdProsecutionType;

//   @IsOptional()
//   @IsEnum(PpoType)
//   ppo_group: PpoType;
// }
