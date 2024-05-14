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

  // findOne(options: FindOneOptions<AbitEntity>): Promise<AbitEntity>{
  //     return this.abitRepository.findOne(options)
  // }

  // create(abitDetails: CreateAbitDto): Promise<AbitEntity> {
  //     const newAbit = this.abitRepository.create(abitDetails)
  //     return this.abitRepository.save(newAbit)

  // }

  // update(criteria: FindOptionsWhere<AbitEntity>, partialEntity: QueryDeepPartialEntity<AbitEntity>){
  //     return this.abitRepository.update(criteria, partialEntity)
  // }

  // delete(criteria: FindOptionsWhere<AbitEntity>){
  //     return this.abitRepository.delete(criteria)
  // }
}
