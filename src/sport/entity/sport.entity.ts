import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ExercisesEntity } from './exercises.entity'

@Entity({ name: 'sport' })
export class SportEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  abitId: number

  @Column()
  score: number

  @Column()
  result: string

  @ManyToOne(() => AbitEntity, (abit) => abit.sport, { onDelete: 'CASCADE' })
  abit?: AbitEntity

  @ManyToOne(() => ExercisesEntity, (exercise) => exercise.sport)
  exercises?: ExercisesEntity
}
