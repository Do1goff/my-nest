import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PersonalAchievementsEntity } from './personalAchievements.entity'

@Entity({ name: 'list_achievements' })
export class ListAchievementsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => PersonalAchievementsEntity,
    (personalAchievements) => personalAchievements.abitId,
  )
  personalAchievements?: PersonalAchievementsEntity[];
}
