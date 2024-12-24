import { CommissionEntity } from 'src/commission/entity/commission.entity'
import { CategoryEducationEntity } from 'src/education/entity/categoryEducation.entity'
import { CategoryUncanceledEducationEntity } from 'src/education/entity/categoryUncanceledEducation.entity'
import { InstitutesEntity } from 'src/education/entity/institutes.entity'
import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity'
import { ExaminationGroupEntity } from 'src/examinationGroup/entity/examinationGroup.entity'
import { FamilyEntity } from 'src/family/entity/family.entity'
import { LocationsEntity } from 'src/locations/entity/locations.entity'
import { MilitaryCommissariatsEntity } from 'src/militaryCommissariat/entity/militaryCommissariats.entity'
import { MilitaryPlacesEntity } from 'src/militaryService/entity/militaryPlaces.entity'
import { MilitaryRanksEntity } from 'src/militaryService/entity/militaryRanks.entity'
import { MilitarySVOEntity } from 'src/militaryService/entity/militarySVO.entity'
import { MilitaryUnitsEntity } from 'src/militaryService/entity/militaryUnits.entity'
import { PassportIssuedByEntity } from 'src/passport/entity/passportIssuedBy.entity'
import { ReasonsEntity } from 'src/reasonExpulsion/entity/reasons.entity'
import { SchoolMarksEntity } from 'src/schoolMarks/entity/schoolMarks.entity'
import { SportEntity } from 'src/sport/entity/sport.entity'
import { TelephoneEntity } from 'src/telephone/entity/telephone.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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
  MEN = 'Мужской',
  WOMEN = 'Женский',
}

export enum SCType {
  CHECK = 'Проверить',
  PRESENT = 'Имеется',
  ABSENT = 'Отсутствует',
}

export enum LdType {
  ABSENT = 'Отсутствует',
  PRINT = 'Бумажное',
  ELECTRO = 'Электронное',
}

export enum FamilyStatusType {
  MARRIED = 'Женат',
  SINGLE = 'Холост',
  DIVORCED = 'Разведен',
  WIDOWER = 'Вдовец'
}

export enum AdmissionSourceInfoType {
  FAMILY = 'Родственники',
  FRIENDS = 'Друзья/знакомые',
  EDUCATION = 'Место учёбы',
  MILITARY_COMMISSARIAT = 'Военкомат',
  WEBSITE = 'Сайт МО',
  VK_GROUP = 'Группа ВК',
  TELEGRAM = 'Телеграм-канал',
  ACADEMY = 'Обращение в академию',
}

export enum SecretAccessType {
  GROUP_1 = '1 группа',
  GROUP_2 = '2 группа',
  GROUP_1_IN_PROCESS = '1 группа (в процессе)',
  GROUP_2_IN_PROCESS = '2 группа (в процессе)',
  GROUP_3 = '3 группа',
  NONE = 'Отсутствует',
}

export enum MedType {
  TRUE = 'Имеется',
  FALSE = 'Отсутствует',
}

export enum MvdType {
  TRUE = 'Имеется',
  FALSE = 'Отсутствует',
}

export enum PpoType {
  GROUP_1 = '1 группа',
  GROUP_2 = '2 группа',
  GROUP_3 = '3 группа',
  GROUP_4 = '4 группа',
  NONE = 'Отсутствует',
}

export enum SignType {
  MAIN = 'Основной',
  CADET = 'Кадет',
  KHABAROVSK = 'Хабаровск',
  OFFSITE_GROUP = 'Выездная группа',
  OTHER = 'Другой'
}

export enum RecruitmentType {
  MAIN = 'Основная',
  ADDITIONAL_SET = 'Донабор',
  CADET = 'Кадет',
}

export enum MilitaryServiceCategory {
  CONSCRIPTION = 'По призыву',
  CONTRACT = 'Контракт',
}

export type DocumentEducationData = {
  number:number;
  date:Date;
}


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

  @Column({nullable:true})
  birthday: Date; 

  @Column({nullable:true})
  note?: string;

  @ManyToOne(() => NationalityEntity)
  nationality?: NationalityEntity

  @Column({ type: 'enum', enum: GenderType, default: GenderType.MEN })
  gender?: GenderType = GenderType.MEN;

  @OneToMany(() => TelephoneEntity, (telephone) => telephone.abit)
  telephone?: TelephoneEntity[];

  @ManyToOne(() => LocationsEntity, (location) => location.abit)
  residence?: LocationsEntity;

  @Column({ type: 'enum', enum: SCType, nullable:true })
  secondCitizenship?: SCType ;

  @Column()
  personal_file_number_count: string;

  @Column()
  personal_file_number: string;

  @Column({nullable:true})
  personal_file_reg: string;  

  @Column({ nullable: true })
  personal_file_date_reg: Date; 

  @Column({ type: 'enum', enum: LdType, nullable:true})
  personal_file_existence?: LdType;

// // /?
//   @Column()
//   personal_file_arm: number = 0;

  @Column({
    type: 'enum',
    enum: FamilyStatusType,
    nullable:true
  })
  family_status?: FamilyStatusType;

  @Column({nullable:true})
  family_address: string;

  @ManyToOne(() => FamilySocialStatusEntity)
  family_social_status?: FamilySocialStatusEntity; 

  @Column({ nullable: true })
  family_childrens: number;

  @Column({ nullable: true })
  abit_childrens: number;
  
  @OneToMany(() => FamilyEntity, (family) => family.abit)
  family?: FamilyEntity[];

  @Column({nullable:true})
  personal_number: string;

  @Column({ default: false })
  personal_number_giving: boolean = false;
  ///////////////////////////////////////////////////////
  @ManyToOne(() => MilitaryRanksEntity)
  militaryService_rank: MilitaryRanksEntity;

  @Column({nullable:true})
  militaryService_post: string;

  @ManyToOne(() => MilitaryPlacesEntity)
  militaryService_place: MilitaryPlacesEntity;

  @ManyToOne(() => MilitaryUnitsEntity)
  militaryService_unit: MilitaryUnitsEntity;

  @Column( { type: 'enum', enum: MilitaryServiceCategory, nullable:true })
  militaryService_category: MilitaryServiceCategory;

  @Column({default:false})
  militaryService_dismissed: boolean;

  @Column({default:false})
  militaryService_mobilization:boolean;
  
  @Column({default:false})
  militaryService_collection:boolean;

  @ManyToOne(() => MilitarySVOEntity)
  militaryService_SVO: MilitarySVOEntity
///////////////////////////////////////////////////////////
  @ManyToOne(() => MilitaryCommissariatsEntity)
  militaryCommissariat?: MilitaryCommissariatsEntity;
//////////////////////////////////////////////////////////////
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

  @OneToMany(() => PersonalAchievementsEntity, (achievement) => achievement.abit)
  personal_achievements?: PersonalAchievementsEntity[];
/////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////
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
///////////////////////////////////////
  @ManyToOne(() => ReasonsEntity)
  expulsion_reason?: ReasonsEntity;

  @Column({nullable:true})
  expulsion_date: Date;

  @Column({nullable:true})
  expulsion_note: string;
//////////////////////////////////////
  @ManyToOne(() => CossackSocietyEntity)
  cossack_society?: CossackSocietyEntity;

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

////////////////////////////////////////////////
  @Column({nullable:true})
  passport_series: string;

  @Column({nullable:true})
  passport_num: string;

  @Column({nullable:true})
  passport_birthplace: string;

  @Column({nullable:true})
  passport_date_issue: Date;

  @ManyToOne(() => PassportIssuedByEntity)
  passport_issued_by: PassportIssuedByEntity;

  @Column({nullable:true})
  passport_department_code: string;
  /////////////////////////////////////////////////

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

  ///////////////////////////////////////////////////////////////////////////////////////////??
  @ManyToOne(() => CategoryEducationEntity)
  education_category: CategoryEducationEntity;

  @Column({nullable:true})
  education_date_end: Date;

  @ManyToOne(() => InstitutesEntity) 
  education_institute?: InstitutesEntity;

  @Column('simple-json',{ nullable: true })
  education_document?: DocumentEducationData;
  ////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
  @ManyToOne(() => CategoryUncanceledEducationEntity)
  uncanceledEducation_category: CategoryUncanceledEducationEntity;

  @Column({nullable:true})
  uncanceledEducation_date_admission: Date
  
  @Column({nullable:true})
  uncanceledEducation_date_end: Date;

  @Column({nullable:true})
  uncanceledEducation_period_study: string

  @Column({nullable:true})
  uncanceledEducation_course: number

  @Column({nullable:true})
  uncanceledEducation_semesters_end: number

  @ManyToOne(() => InstitutesEntity)
  uncanceledEducation_institute: InstitutesEntity;

  @Column({nullable:true})
  uncanceledEducation_note:string
////////////////////////////////////////////////////////////////////////////////////////////////
  @OneToMany(() => SchoolMarksEntity, (schoolMarks) => schoolMarks.abit)
  schoolMarks?: SchoolMarksEntity[];

  @OneToMany(() => EgeMarksEntity, (egeMarks) => egeMarks.abit)
  egeMarks?: EgeMarksEntity[];

  @OneToMany(() => EntranceTestEntity, (entranceTest) => entranceTest.abit)
  entranceTest?: EntranceTestEntity[];

  @OneToMany(() => SportEntity, (sport) => sport.abit)
  sport?: SportEntity[];

  @Column({nullable:true})
  sport_score: number
  
  @Column({nullable:true})
  sport_date: Date
  
  @Column({nullable:true})
  qualificationExam_mark: number
  
  @Column({ type: 'simple-array', nullable: true })
  qualificationExam_results: string[]
  
  @Column({nullable:true})
  qualificationExam_date: Date
  
  @Column({nullable:true})
  qualificationExam_group: string
  //////////////////////////////////////////////////////////////
  @ManyToOne(()=>MilitaryInstituteEntity)
  arrivedFrom?: MilitaryInstituteEntity
  
  @ManyToOne(()=>MilitaryInstituteEntity)
  goneIn?: MilitaryInstituteEntity
  ///////////////////////////////////////////////////////////////  
  @Column({nullable:true})
  call_number: string
  
  @Column({nullable:true})
  call_date: Date
  
  @Column({nullable:true})
  call_date_admission: Date

  @Column({nullable:true})
  call_result: string

  @Column({nullable:true})
  call_note: string
//////////////////////////////////////////////////////////////////
  @Column({nullable:true})
  collect_date_admission: Date

  @Column({default:false})
  collect_food: boolean

  @CreateDateColumn()
  createdAt: Date
}


