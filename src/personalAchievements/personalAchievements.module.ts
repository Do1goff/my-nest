import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListAchievementsEntity } from './entity/listAchievements.entity'
import { PersonalAchievementsEntity } from './entity/personalAchievements.entity'
import { ListAchievementsController } from './listAchievements.controller'
import { ListAchievementsService } from './listAchievements.service'
import { PersonalAchievementsController } from './personalAchievements.controller'
import { PersonalAchievementsService } from './personalAchievements.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PersonalAchievementsEntity,
      ListAchievementsEntity,
    ]),
  ],
  controllers: [PersonalAchievementsController, ListAchievementsController],
  providers: [PersonalAchievementsService, ListAchievementsService],
})
export class PersonalAchievementsModule {}
