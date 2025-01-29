import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SportEntity } from './sport.entity'

export enum TypeExercise {
  POWER = 'Сила',
  SPEED = 'Быстрота',
  STAMINA = 'Выносливость',
}
@Entity({ name: 'exercises' })
export class ExercisesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'enum', enum: TypeExercise, nullable: true })
  type: TypeExercise

  @OneToMany(() => SportEntity, (sport) => sport.exercises)
  sport?: SportEntity[]
}
