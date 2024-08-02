import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { MilitaryRanksEntity } from './entity/militaryRanks.entity'

@Injectable()
export class MilitaryRanksService {
  constructor(
    @InjectRepository(MilitaryRanksEntity)
    private MilitaryRanksRepository: Repository<MilitaryRanksEntity>,
  ) {}

  find(
    options?: FindManyOptions<MilitaryRanksEntity>,
  ): Promise<MilitaryRanksEntity[]> {
    return this.MilitaryRanksRepository.find(options);
  }

  // findOne(options: FindOneOptions<Entity>): Promise<Entity>{
  //     return this.Repository.findOne(options)
  // }

  // create(Details: CreateAbitDto): Promise<AbitEntity> {
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
