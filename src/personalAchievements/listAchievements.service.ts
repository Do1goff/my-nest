import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { ListAchievementsEntity } from './entity/listAchievements.entity'

@Injectable()
export class ListAchievementsService {
  constructor(
    @InjectRepository(ListAchievementsEntity)
    private listAchievementsRepository: Repository<ListAchievementsEntity>,
  ) {}

  find(
    options?: FindManyOptions<ListAchievementsEntity>,
  ): Promise<ListAchievementsEntity[]> {
    return this.listAchievementsRepository.find(options);
  }

}
