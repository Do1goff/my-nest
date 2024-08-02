import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EducationEntity } from './education.entity'

@Entity({ name: 'categoryEducation' })
export class CategoryEducationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EducationEntity, (education) => education.id)
  education?: EducationEntity[];
}
