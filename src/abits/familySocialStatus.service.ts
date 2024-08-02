import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { FamilySocialStatusEntity } from './entity/familySocialStatus.entity'

@Injectable()
export class FamilySocialStatusService {
  constructor(
    @InjectRepository(FamilySocialStatusEntity)
    private familySocialStatusRepository: Repository<FamilySocialStatusEntity>,
  ) {}

  find(options?: FindManyOptions<FamilySocialStatusEntity>): Promise<FamilySocialStatusEntity[]> {
    return this.familySocialStatusRepository.find(options);
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
