import { AbitEntity } from 'src/abits/entity/abit.entity'
import { SubjectsEntity } from 'src/abits/entity/subjects.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'school_marks' })
export class SchoolMarksEntity {
  @PrimaryGeneratedColumn()
  abitSubjectId: number;

  @Column()
  abitId: number;

  @Column()
  mark: number;

  @ManyToOne(() => AbitEntity, (abit) => abit.schoolMarks)
  abit?: AbitEntity;

  @ManyToOne(() => SubjectsEntity, (subject) => subject.schoolMarks)
  subject?: SubjectsEntity;
 
}
