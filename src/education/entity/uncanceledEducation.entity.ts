import { AbitEntity } from 'src/abits/entity/abit.entity'
import { CategoryUncanceledEducationEntity } from 'src/education/entity/categoryUncanceledEducation.entity'
import { InstitutesEntity } from 'src/instituts/entity/institutes.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'uncanceledEducation' })
export class UncanceledEducationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abitId:number

  @ManyToOne(() => CategoryUncanceledEducationEntity)
  category: CategoryUncanceledEducationEntity;

  @Column({nullable:true})
  date_admission: Date
  
  @Column({nullable:true})
  date_end: Date;

  @Column({nullable:true})
  period_study: string

  @Column({nullable:true})
  course: number

  @Column({nullable:true})
  semesters_end: number

  @ManyToOne(() => InstitutesEntity)
  institute: InstitutesEntity;

  @Column({nullable:true})
  note:string

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
