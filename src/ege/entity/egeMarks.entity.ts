import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from '../../abits/entity/abit.entity'
import { SubjectsEntity } from '../../abits/entity/subjects.entity'

@Entity({ name: 'ege_marks' })
export class EgeMarksEntity {
  @PrimaryGeneratedColumn()
  abitSubjectId: number;

  @Column()
  abitId: number;

  @Column()
  mark: number;

  @Column() 
  date: Date;

  @ManyToOne(() => AbitEntity, (abit) => abit.egeMarks)
  abit?: AbitEntity;

  @ManyToOne(() => SubjectsEntity, (subject) => subject.egeMarks)
  subject?: SubjectsEntity;
 

}
