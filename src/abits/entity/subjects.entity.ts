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

  @Column({nullable:true})
  minEGE: number;

  @OneToMany(() => EgeMarksEntity, (egeMarks) => egeMarks.subject)
  egeMarks?: EgeMarksEntity[];

  @OneToMany(
    () => SchoolMarksEntity,
    (schoolMarks) => schoolMarks.subject,
  )
  schoolMarks?: SchoolMarksEntity[];

  @OneToMany(
    () => EntranceTestEntity,
    (entranceTest) => entranceTest.subject,
  )
  entranceTest?: EntranceTestEntity[];
}
