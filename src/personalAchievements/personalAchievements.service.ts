import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreatePersonalAchievementsDto } from './dto/CreatePersonalAchievementsDto.dto'
import { PersonalAchievementsEntity } from './entity/personalAchievements.entity'

@Injectable()
export class PersonalAchievementsService {
  constructor(
    @InjectRepository(PersonalAchievementsEntity)
    private personalAchievementsRepository: Repository<PersonalAchievementsEntity>,
  ) {}

  async create(
    data: CreatePersonalAchievementsDto,
  ): Promise<PersonalAchievementsEntity> {
    const achievement = this.personalAchievementsRepository.create(data);
    return this.personalAchievementsRepository.save(achievement);
  }

  find(
    options?: FindManyOptions<PersonalAchievementsEntity>,
  ): Promise<PersonalAchievementsEntity[]> {
    return this.personalAchievementsRepository.find(options);
  }

  findOne(
    options: FindOneOptions<PersonalAchievementsEntity>,
  ): Promise<PersonalAchievementsEntity> {
    return this.personalAchievementsRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<PersonalAchievementsEntity>,
    partialEntity: QueryDeepPartialEntity<PersonalAchievementsEntity>,
  ) {
    return this.personalAchievementsRepository.update(criteria, partialEntity);
  }
}
