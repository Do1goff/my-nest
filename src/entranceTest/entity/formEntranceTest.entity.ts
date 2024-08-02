import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EntranceTestEntity } from './entranceTest.entity'

@Entity({ name: 'form_entrance_test' })
export class FormEntranceTestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

	@OneToMany(
    () => EntranceTestEntity,
    (entranceTest) => entranceTest.abitSubjectId,
  )
  entranceTest?: EntranceTestEntity[];
}
