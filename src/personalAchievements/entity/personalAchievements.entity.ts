import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from '../../abits/entity/abit.entity'
import { ListAchievementsEntity } from './listAchievements.entity'

@Entity({ name: 'personal_achievements' })
export class PersonalAchievementsEntity {
  @PrimaryGeneratedColumn()
  abitAchievementId: number;

  @Column()
  abitId: number;

  @Column()
  achievementId: number;

  @Column({ default: false })
  test: boolean;

  @ManyToOne(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;

  @ManyToOne(() => ListAchievementsEntity, (achievement) => achievement.id)
  achievement?: ListAchievementsEntity;
}
