import { AbitEntity } from 'src/abits/entity/abit.entity'
import { SubjectsEntity } from 'src/abits/entity/subjects.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { FormEntranceTestEntity } from './formEntranceTest.entity'

@Entity({ name: 'entrance_test' })
export class EntranceTestEntity {
  @PrimaryGeneratedColumn()
  abitSubjectId: number;

  @Column()
  abitId: number;

  @Column()
  mark: number;

  @Column()
  date: Date;

  @ManyToOne(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;

  @ManyToOne(() => SubjectsEntity, (subject) => subject.entranceTest)
  subject?: SubjectsEntity;

  @ManyToOne(() => FormEntranceTestEntity, (form) => form.id)
  form?: FormEntranceTestEntity;
}

