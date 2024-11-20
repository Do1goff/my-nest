import { Controller, Get } from '@nestjs/common'
import { ListAchievementsService } from './listAchievements.service'

@Controller('list_achievements')
export class ListAchievementsController {
  constructor(private listAchievementsService: ListAchievementsService) {}

  @Get()
  async get() {
    const achievement = await this.listAchievementsService.find({});
    return achievement;
  }

}
