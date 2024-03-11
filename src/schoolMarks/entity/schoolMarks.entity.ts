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
  subjectId: number;

  @Column()
  mark: number;

  @ManyToOne(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;

  @ManyToOne(() => SubjectsEntity, (subject) => subject.id)
  subject?: SubjectsEntity;
}
