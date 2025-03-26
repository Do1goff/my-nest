import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from '../../abits/entity/abit.entity'
import { ListAchievementsEntity } from './listAchievements.entity'

@Entity({ name: 'personal_achievements' })
export class PersonalAchievementsEntity {
  @PrimaryGeneratedColumn()
  abitAchievementId: number

  @Column()
  abitId: number

  @Column()
  achievementId: number

  @Column({ default: false })
  test: boolean

  @ManyToOne(() => AbitEntity, (abit) => abit.personal_achievements, {
    onDelete: 'CASCADE',
  })
  abit?: AbitEntity[]

  @ManyToOne(
    () => ListAchievementsEntity,
    (achievement) => achievement.personalAchievements,
  )
  achievement?: ListAchievementsEntity
}
