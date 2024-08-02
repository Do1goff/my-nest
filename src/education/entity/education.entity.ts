import { AbitEntity } from 'src/abits/entity/abit.entity'
import { InstitutesEntity } from 'src/instituts/entity/institutes.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CategoryEducationEntity } from './categoryEducation.entity'

export type DocumentEducationData = {
  number:number;
  date:Date;
}

@Entity({ name: 'education' })
export class EducationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abitId:number
 
  @ManyToOne(() => CategoryEducationEntity)
  category: CategoryEducationEntity;

  @Column({nullable:true})
  date_end: Date;

  @ManyToOne(() => InstitutesEntity) 
  institute: InstitutesEntity;

  @Column('simple-json',{ nullable: true })
  document_education?: DocumentEducationData;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
