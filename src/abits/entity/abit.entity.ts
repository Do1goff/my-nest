/* eslint-disable prettier/prettier */
import { CommissionEntity } from 'src/commission/entity/commission.entity'
import { EducationEntity } from 'src/education/entity/education.entity'
import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity'
import { ExaminationGroupEntity } from 'src/examinationGroup/entity/examinationGroup.entity'
import { MilitaryCommissariatsEntity } from 'src/militaryCommissariat/entity/militaryCommissariats.entity'
import { SchoolMarksEntity } from 'src/schoolMarks/entity/schoolMarks.entity'
import { SportEntity } from 'src/sport/entity/sport.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { EgeMarksEntity } from '../../ege/entity/egeMarks.entity'
import { CossackSocietyEntity } from './cossackSociety.entity'
import { ExemptionEntity } from './exemption.entity'
import { NationalityEntity } from './nationality.entity'
import { PersonalAchievements } from './personalAchievements.entity'
import { QuotaEntity } from './quota.entity'
import { SpecialtyEntity } from './specialties.entity'

export enum GenderType {
  MEN = 'men',
  WOMEN = 'women',
}

export enum LdType {
  PRINT = 'print',
  ELECTRO = 'electro',
}

export enum FamilyStatusType {
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
  GROUP_1 = 'group_1',
  GROUP_2 = 'group_2',
  GROUP_3 = 'group_3',
  IN_PROCESS = 'IN_PROCESS',
  NONE = 'none',
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

export type ExpulsionData = {
  reason: string;
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

  @Column({ nullable: true })
  note?: string;

  @ManyToOne(() => NationalityEntity)
  nationality?: NationalityEntity

  @Column({ type: 'enum', enum: GenderType, default: GenderType.MEN })
  gender?: GenderType = GenderType.MEN;

  @Column({ nullable: true })
  telephone?: string;

  @Column({ nullable: true })
  telephone2?: string;

  @Column({ nullable: true })
  residence?: string;

  @Column({ nullable: true })
  secondCitizenship?: string;

  @Column()
  personal_file_number: string = '';

  @Column()
  personal_file_reg: string = '';

  @Column({ nullable: true })
  personal_file_date_reg: Date;

  @Column({ type: 'enum', enum: LdType, default: LdType.PRINT })
  personal_file_existence?: LdType = LdType.PRINT;

  @Column()
  personal_file_arm: number = 0;

  @Column({
    type: 'enum',
    enum: FamilyStatusType,
    default: FamilyStatusType.SINGLE,
  })
  family_status?: FamilyStatusType = FamilyStatusType.SINGLE;

  @Column()
  family_address: string = '';

  @Column()
  family_social_status: string = '';

  @Column({ nullable: true })
  family_childrens: number;

  @Column({ nullable: true })
  abit_childrens: number;

  @Column('simple-json', { nullable: true })
  mother: PersonalData;

  @Column({ default: false })
  mother_fail: boolean = false;

  @Column('simple-json', { nullable: true })
  father: PersonalData;

  @Column({ default: false })
  father_fail: boolean;

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

  @ManyToOne(() => ExemptionEntity)
  exemption?: ExemptionEntity; 

  @ManyToOne(() => PersonalAchievements)
  personal_achievements?: PersonalAchievements;

  @Column({ nullable: true })
  admission_date: Date;

  @ManyToOne(() => CommissionEntity)
  admission_commission?: CommissionEntity;

  @ManyToOne(() => ExaminationGroupEntity)
  admission_examination_group?: ExaminationGroupEntity;

  @Column({ type: 'simple-array', nullable: true })
  admission_source_information?: string[];

  @Column({ nullable: true })
  admission_note?: string;

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
    default: SecretAccessType.NONE,
  })
  document_secrets_access: SecretAccessType = SecretAccessType.NONE;

  @Column()
  document_snils: string = '';

  @Column()
  document_inn: string = '';

  @Column({ default: false })
  document_medical_certificate: boolean = false;

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

  @Column({ default: false })
  document_mvd_availability?: boolean = false;

  @Column({ type: 'enum', enum: MvdProsecutionType, nullable: true })
  document_mvd_prosecution?: MvdProsecutionType;

  @ManyToOne(() => CossackSocietyEntity)
  cossack_society?: CossackSocietyEntity;

  @OneToMany(() => EducationEntity, (education) => education.abitId)
  education?: EducationEntity[];

  @OneToMany(() => EgeMarksEntity, (egeMarks) => egeMarks.abitId)
  egeMarks?: EgeMarksEntity[];

  @OneToMany(() => SchoolMarksEntity, (schoolMarks) => schoolMarks.abitId)
  schoolMarks?: SchoolMarksEntity[];

  @OneToMany(() => EntranceTestEntity, (entranceTest) => entranceTest.abitId)
  entranceTest?: EntranceTestEntity[];

  @OneToMany(() => SportEntity, (sport) => sport.abitId)
  sport?: SportEntity[];

  @CreateDateColumn()
  createAt: Date;
}
