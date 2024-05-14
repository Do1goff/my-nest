/* eslint-disable prettier/prettier */
import { AddressesEntity } from 'src/addresses/entity/addresses.entity'
import { CommissionEntity } from 'src/commission/entity/commission.entity'
import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity'
import { ExaminationGroupEntity } from 'src/examinationGroup/entity/examinationGroup.entity'
import { FamilyEntity } from 'src/family/entity/family.entity'
import { MilitaryCommissariatsEntity } from 'src/militaryCommissariat/entity/militaryCommissariats.entity'
import { SchoolMarksEntity } from 'src/schoolMarks/entity/schoolMarks.entity'
import { SportEntity } from 'src/sport/entity/sport.entity'
import { TelephoneEntity } from 'src/telephone/entity/telephone.entity'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { EgeMarksEntity } from '../../ege/entity/egeMarks.entity'
import { PersonalAchievementsEntity } from '../../personalAchievements/entity/personalAchievements.entity'
import { CossackSocietyEntity } from './cossackSociety.entity'
import { NationalityEntity } from './nationality.entity'
import { PriorityRightEntity } from './priorityRight.entity'
import { QuotaEntity } from './quota.entity'
import { SpecialtyEntity } from './specialties.entity'

export enum GenderType {
  MEN = 'men',
  WOMEN = 'women',
}

export enum SCType {
  CHECK = 'check',
  PRESENT = 'present',
  ABSENT = 'absent',
}

export enum FamilySocialStatusType {
  CHECK = 'check',
  MILITARY = 'military',
  CIVIL_SERVANT = 'civil_servant',
  TEACHER = 'teacher',
  SERVICE = 'service',
  TRADER = 'trader',
  WORK = 'work',
  SERVANT = 'servant',
  SCIENCE = 'science',
}

export enum LdType {
  PRINT = 'print',
  ELECTRO = 'electro',
  PRINT_AND_ELECTRO = 'print_and_electro'
}

export enum FamilyStatusType {
  CHECK = 'check',
  MARRIED = 'married',
  SINGLE = 'single',
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

export enum MilitaryServiceCategory {
  CONSCRIPTION = 'conscription',
  CONTRACT = 'contract',
}

export enum SecretAccessType {
  CHECK = 'check',
  GROUP_1 = 'group_1',
  GROUP_2 = 'group_2',
  GROUP_1_IN_PROCESS = 'group_1_in_progress',
  GROUP_2_IN_PROCESS = 'group_2_in_progress',
  NONE = 'none',
}

export enum MedType {
  CHECK = 'check',
  TRUE = 'true',
  FALSE = 'false',
}

export enum MvdType {
  CHECK = 'check',
  TRUE = 'true',
  FALSE = 'false',
}

export enum PpoType {
  GROUP_1 = 'group_1',
  GROUP_2 = 'group_2',
  GROUP_3 = 'group_3',
  GROUP_4 = 'group_4',
}

export enum MvdProsecutionType {
  CRIMINAL = 'criminal',
  ADMINISTRATIVE = 'administrative',
  ACCOUNTING = 'accounting',
}

export type PersonalData = {
  firstName: string;
  lastName: string;
  surName: string;
  birthday: Date;
  status: string;
};

export type MilitaryServiceData = {
  rank: string;
  post: string;
  place: string;
  unit: string;
  category: MilitaryServiceCategory;
  dismissed: boolean;
};

export type PassportData = {
  series: number;
  num: number;
  birthplace: string;
  date_issue: Date;
  issued_by: string;
  department_code: string;
};

export type EducationData = {
  category: string;
  date_end: Date;
  institute: string;
  address: string;
  document_education: string
};

export type UncanceledEducationData = {
  category: string;
  date_end: Date;
  institute: string;
  date_admission: Date
  period_study: string
  course: number
  semesters_end: number
};

export type ExpulsionData = {
  reason: string;
  date: Date;
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

  @Column({default: ''})
  note: string = '';

  @ManyToOne(() => NationalityEntity)
  nationality?: NationalityEntity

  @Column({ type: 'enum', enum: GenderType, default: GenderType.MEN })
  gender?: GenderType = GenderType.MEN;

  @OneToMany(() => TelephoneEntity, (telephone) => telephone.abitId)
  telephone?: TelephoneEntity[];

  //////
  @Column({ nullable: true })
  residence?: string;

  @Column({ type: 'enum', enum: SCType, default: SCType.CHECK })
  secondCitizenship?: SCType = SCType.CHECK;

  @Column()
  personal_file_number: string = '';

  @Column()
  personal_file_reg: string = '';  

  @Column({ nullable: true })
  personal_file_date_reg: Date; 

  @Column({ type: 'enum', enum: LdType, default: LdType.PRINT })
  personal_file_existence?: LdType = LdType.PRINT;

// /?
  @Column()
  personal_file_arm: number = 0;

  @Column({
    type: 'enum',
    enum: FamilyStatusType,
    default: FamilyStatusType.CHECK
  })
  family_status?: FamilyStatusType = FamilyStatusType.CHECK;

  /////
  @Column()
  family_address: string = '';

  @Column({ type: 'enum', enum: FamilySocialStatusType, default: FamilySocialStatusType.CHECK })
  family_social_status: FamilySocialStatusType = FamilySocialStatusType.CHECK;

  @Column({ nullable: true })
  family_childrens: number;

  @Column({ nullable: true })
  abit_childrens: number;
  
  @OneToMany(() => FamilyEntity, (family) => family.abitId)
  family?: FamilyEntity[];

  @Column()
  personal_number: string = '';

  @Column({ default: false })
  personal_number_giving: boolean = false;

  @Column('simple-json', { nullable: true })
  militaryService?: MilitaryServiceData;
  
  @ManyToOne(() => MilitaryCommissariatsEntity)
  militaryCommissariat?: MilitaryCommissariatsEntity;

  @ManyToOne(() => QuotaEntity)
  quota?: QuotaEntity; 

  @ManyToOne(() => PriorityRightEntity)
  priorityRight?: PriorityRightEntity; 

  @ManyToOne(() => PersonalAchievementsEntity)
  personal_achievements?: PersonalAchievementsEntity;

  @Column({ nullable: true })
  admission_date: Date;

  @ManyToOne(() => CommissionEntity)
  admission_commission?: CommissionEntity;

  @ManyToOne(() => ExaminationGroupEntity)
  admission_examination_group?: ExaminationGroupEntity;

  @Column({ type: 'simple-array', nullable: true })
  admission_source_information?: string[];

  @Column({default:''})
  admission_note: string = '';

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
    default: SecretAccessType.CHECK
  })
  document_secrets_access: SecretAccessType = SecretAccessType.CHECK;

  @Column()
  document_snils: string = '';

  @Column()
  document_inn: string = '';

  @Column({ type: 'enum', enum: MedType, default: MedType.CHECK })
  document_medical_certificate: MedType = MedType.CHECK;

  @Column({ type: 'enum', enum: PpoType, nullable: true })
  document_ppo_group: PpoType;

  @Column('simple-json', { nullable: true })
  document_passport?: PassportData;

  @Column({ default: false })
  document_passport_presence: boolean;

  @Column({ default: false })
  document_birthday_presence: boolean;

  @Column({ default: false })
  document_education_presence: boolean;

  @Column({ type: 'enum', enum: MvdType, default: MvdType.CHECK })
  document_mvd_availability: MvdType = MvdType.CHECK;
  
  @Column({ type: 'simple-array', nullable: true })
  document_mvd_prosecution?: string[];

  @ManyToOne(() => CossackSocietyEntity)
  cossack_society?: CossackSocietyEntity;

  @Column('simple-json', {nullable:true})
  education?: EducationData

  @Column('simple-json', {nullable:true})
  uncanceledEducation?: UncanceledEducationData

  @OneToMany(() => EgeMarksEntity, (egeMarks) => egeMarks.abitId)
  egeMarks?: EgeMarksEntity[];

  @OneToMany(() => SchoolMarksEntity, (schoolMarks) => schoolMarks.abitId)
  schoolMarks?: SchoolMarksEntity[];

  @OneToMany(() => EntranceTestEntity, (entranceTest) => entranceTest.abitId)
  entranceTest?: EntranceTestEntity[];

  @OneToMany(() => SportEntity, (sport) => sport.abitId)
  sport?: SportEntity[];

  @Column('simple-json',{ nullable: true })
  qualificationExam?: qualificationExamData;

  @ManyToOne(() => AddressesEntity)
  addresses?: AddressesEntity;
}
