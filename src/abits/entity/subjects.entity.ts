import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity'
import { SchoolMarksEntity } from 'src/schoolMarks/entity/schoolMarks.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EgeMarksEntity } from '../../ege/entity/egeMarks.entity'

@Entity({ name: 'subjects' })
export class SubjectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EgeMarksEntity, (egeMarks) => egeMarks.abitSubjectId)
  egeMarks?: EgeMarksEntity[];

  @OneToMany(
    () => SchoolMarksEntity,
    (schoolMarks) => schoolMarks.abitSubjectId,
  )
  schoolMarks?: SchoolMarksEntity[];

  @OneToMany(
    () => EntranceTestEntity,
    (entranceTest) => entranceTest.abitSubjectId,
  )
  entranceTest?: EntranceTestEntity[];
}
