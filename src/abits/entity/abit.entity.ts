/* eslint-disable prettier/prettier */
import { AddressesEntity } from 'src/addresses/entity/addresses.entity'
import { CommissionEntity } from 'src/commission/entity/commission.entity'
import { EducationEntity } from 'src/education/entity/education.entity'
import { UncanceledEducationEntity } from 'src/education/entity/uncanceledEducation.entity'
import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity'
import { ExaminationGroupEntity } from 'src/examinationGroup/entity/examinationGroup.entity'
import { FamilyEntity } from 'src/family/entity/family.entity'
import { LocationsEntity } from 'src/locations/entity/locations.entity'
import { MilitaryCommissariatsEntity } from 'src/militaryCommissariat/entity/militaryCommissariats.entity'
import { MilitaryServiceEntity } from 'src/militaryService/entity/militaryService.entity'
import { PassportEntity } from 'src/passport/entity/passport.entity'
import { PassportIssuedByEntity } from 'src/passport/entity/passportIssuedBy.entity'
import { ReasonsEntity } from 'src/reasonExpulsion/entity/reasons.entity'
import { SchoolMarksEntity } from 'src/schoolMarks/entity/schoolMarks.entity'
import { SportEntity } from 'src/sport/entity/sport.entity'
import { TelephoneEntity } from 'src/telephone/entity/telephone.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { EgeMarksEntity } from '../../ege/entity/egeMarks.entity'
import { PersonalAchievementsEntity } from '../../personalAchievements/entity/personalAchievements.entity'
import { CossackSocietyEntity } from './cossackSociety.entity'
import { EstablishedQuotaEntity } from './establishedQuota.entity'
import { FamilySocialStatusEntity } from './familySocialStatus.entity'
import { MilitaryInstituteEntity } from './militaryInstitute.entity'
import { NationalityEntity } from './nationality.entity'
import { PriorityRightEntity } from './priorityRight.entity'
import { SeparateQuotaEntity } from './separateQuota.entity'
import { SpecialtyEntity } from './specialties.entity'

export enum GenderType {
  MEN = 'men',
  WOMEN = 'women',
}

export enum SCType {
  EMPTY = 'empty',
  CHECK = 'check',
  PRESENT = 'present',
  ABSENT = 'absent',
}


export enum LdType {
  ABSENT = 'absent',
  PRINT = 'print',
  ELECTRO = 'electro',
  ELECTRO_PRINT_AND = 'electro_print_and'
}

export enum FamilyStatusType {
  MARRIED = 'married',
  SINGLE = 'single',
  DIVORCED = 'divorced',
  WIDOWER = 'widower'
}

export enum AdmissionSourceInfoType {
  FAMILY = 'family',
  FRIENDS = 'friends',
  EDUCATION = 'education',
  MILITARY_COMMISSARIAT = 'military_commissariat',
  WEBSITE = 'website',
  VK_GROUP = 'vk_group',
  TELEGRAM = 'telegram',
  ACADEMY = 'academy',
}


export enum SecretAccessType {
  CHECK = 'check',
  GROUP_1 = 'group_1',
  GROUP_2 = 'group_2',
  GROUP_1_IN_PROCESS = 'group_1_in_process',
  GROUP_2_IN_PROCESS = 'group_2_in_process',
  GROUP_3 = 'group_3',
  NONE = 'none',
}

export enum MedType {
  TRUE = 'true',
  FALSE = 'false',
}

export enum MvdType {
  TRUE = 'true',
  FALSE = 'false',
}

export enum PpoType {
  GROUP_1 = 'group_1',
  GROUP_2 = 'group_2',
  GROUP_3 = 'group_3',
  GROUP_4 = 'group_4',
  NONE = 'none',
}

export enum SignType {
  EMPTY = 'empty',
  MAIN = 'main',
  CADET = 'cadet',
  KHABAROVSK = 'khabarovsk',
  OFFSITE_GROUP = 'offsite_group',
  OTHER = 'other'
}

export enum RecruitmentType {
  EMPTY = 'empty',
  MAIN = 'main',
  ADDITIONAL_SET = 'additional_Set',
  CADET = 'cadet',
}

export type PassportData = {
  series: number;
  num: number;
  birthplace: string;
  date_issue: Date;
  issued_by: PassportIssuedByEntity;
  department_code: string;
};

export type ExpulsionData = {
  reason: ReasonsEntity;
  date: Date;
  note:string
};

export type qualificationExamData = {
  mark: number;
  date: Date;
};


@Entity({ name: 'abits' })
export class AbitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  surName?: string;

  @Column()
  birthday: Date; 

  @Column({nullable:true})
  note: string;

  @ManyToOne(() => NationalityEntity)
  nationality?: NationalityEntity

  @Column({ type: 'enum', enum: GenderType, default: GenderType.MEN })
  gender?: GenderType = GenderType.MEN;

  @OneToMany(() => TelephoneEntity, (telephone) => telephone.abitId)
  telephone?: TelephoneEntity[];

  @ManyToOne(() => LocationsEntity, (location) => location.id)
  residence?: LocationsEntity;

  @Column({ type: 'enum', enum: SCType, default: SCType.EMPTY })
  secondCitizenship?: SCType = SCType.EMPTY;

  @Column()
  personal_file_number: string = '';

  @Column()
  personal_file_reg: string = '';  

  @Column({ nullable: true })
  personal_file_date_reg: Date; 

  @Column({ type: 'enum', enum: LdType, nullable:true})
  personal_file_existence?: LdType;

// /?
  @Column()
  personal_file_arm: number = 0;

  @Column({
    type: 'enum',
    enum: FamilyStatusType,
    nullable:true
  })
  family_status?: FamilyStatusType;

  /////
  @Column({nullable:true})
  family_address: string;
  // @ManyToOne(() => LocationsEntity, (location) => location.id)
  // family_address?: LocationsEntity;

  @ManyToOne(() => FamilySocialStatusEntity)
  family_social_status?: FamilySocialStatusEntity; 

  @Column({ nullable: true })
  family_childrens: number;

  @Column({ nullable: true })
  abit_childrens: number;
  
  @OneToMany(() => FamilyEntity, (family) => family.abitId)
  family?: FamilyEntity[];

  @Column({nullable:true})
  personal_number: string;

  @Column({ default: false })
  personal_number_giving: boolean = false;
  
  @OneToOne(() => MilitaryServiceEntity)
  @JoinColumn()
  militaryService?: MilitaryServiceEntity;

  @ManyToOne(() => MilitaryCommissariatsEntity)
  militaryCommissariat?: MilitaryCommissariatsEntity;

  @ManyToOne(() => EstablishedQuotaEntity)
  establishedQuota?: EstablishedQuotaEntity; 

  @Column({default:false})
  establishedQuota_test: boolean

  @ManyToOne(() => SeparateQuotaEntity)
  separateQuota?: SeparateQuotaEntity; 

  @Column({default:false})
  separateQuota_test: boolean

  @ManyToOne(() => PriorityRightEntity)
  priorityRight?: PriorityRightEntity; 

  @Column({default:false})
  priorityRight_test: boolean

  @ManyToOne(() => PersonalAchievementsEntity)
  personal_achievements?: PersonalAchievementsEntity;

  @Column({
    type: 'enum',
    enum: RecruitmentType,
    nullable:true
  })
  recruitment: RecruitmentType;

  @Column({
    type: 'enum',
    enum: SignType,
    nullable:true
  })
  sign: SignType;

  @Column({nullable:true})
  admission_date_reg: Date;

  @Column({ nullable: true })
  admission_date: Date;

  @ManyToOne(() => CommissionEntity)
  admission_commission?: CommissionEntity;

  @ManyToOne(() => ExaminationGroupEntity)
  admission_examination_group?: ExaminationGroupEntity;

  @Column({ type: 'simple-array', nullable: true })
  admission_source_information?: AdmissionSourceInfoType[];

  @Column({nullable:true})
  admission_note: string;

  @ManyToOne(() => SpecialtyEntity)
  specialty_military_commissariat?: SpecialtyEntity;

  @ManyToOne(() => SpecialtyEntity)
  specialty_1?: SpecialtyEntity;

  @ManyToOne(() => SpecialtyEntity)
  specialty_2?: SpecialtyEntity;

  @ManyToOne(() => SpecialtyEntity)
  specialty_3?: SpecialtyEntity;

  @ManyToOne(() => SpecialtyEntity)
  specialty_admission?: SpecialtyEntity;

  @Column('simple-json', { nullable: true })
  expulsion?: ExpulsionData;

  @Column({
    type: 'enum',
    enum: SecretAccessType,
    nullable:true
  })
  document_secrets_access: SecretAccessType;

  @Column({nullable:true})
  document_snils: string;

  @Column({nullable:true})
  document_inn: string;

  @Column({ type: 'enum', enum: MedType, nullable:true })
  document_medical_certificate: MedType;

  @Column({ type: 'enum', enum: PpoType, nullable: true })
  document_ppo_group: PpoType;

  @Column({default:false})
  document_ppo_group_card: boolean;

  /////?
  @OneToOne(() => PassportEntity, (document_passport) => document_passport.abitId)
  @JoinColumn()
  document_passport?: PassportEntity;

  @Column({ default: false })
  document_passport_presence: boolean;

  @Column({ default: false })
  document_birthday_presence: boolean;

  @Column({ default: false })
  document_education_presence: boolean;

  @Column({ type: 'enum', enum: MvdType, nullable:true })
  document_mvd_availability: MvdType;
  
  @Column({ type: 'simple-array', nullable: true })
  document_mvd_prosecution?: string[];

  @ManyToOne(() => CossackSocietyEntity)
  cossack_society?: CossackSocietyEntity;

  @OneToOne(() => EducationEntity, (education) => education.abitId)
  @JoinColumn()
  education?: EducationEntity

  @OneToOne(() => UncanceledEducationEntity, (uncanceledEducation) => uncanceledEducation.id)
  @JoinColumn()
  uncanceledEducation?: UncanceledEducationEntity

  @OneToMany(() => EgeMarksEntity, (egeMarks) => egeMarks.abitId)
  egeMarks?: EgeMarksEntity[];

  @OneToMany(() => SchoolMarksEntity, (schoolMarks) => schoolMarks.abitId)
  schoolMarks?: SchoolMarksEntity[];

  @OneToMany(() => EntranceTestEntity, (entranceTest) => entranceTest.abitId)
  entranceTest?: EntranceTestEntity[];

  @OneToMany(() => SportEntity, (sport) => sport.abitId)
  sport?: SportEntity[];

  @Column({nullable:true})
  sport_date: Date
  
  ////?
  @Column('simple-json',{ nullable: true })
  qualificationExam?: qualificationExamData;

  //?????
  @ManyToOne(() => AddressesEntity)
  addresses?: AddressesEntity;

  @ManyToOne(()=>MilitaryInstituteEntity)
  arrivedFrom?: MilitaryInstituteEntity
  
  @ManyToOne(()=>MilitaryInstituteEntity)
  goneIn?: MilitaryInstituteEntity
}


