import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { EstablishedQuotaEntity } from './entity/establishedQuota.entity'

@Injectable()
export class EstablishedQuotaService {
  constructor(
    @InjectRepository(EstablishedQuotaEntity)
    private establishedQuotaRepository: Repository<EstablishedQuotaEntity>,
  ) {}

  find(options?: FindManyOptions<EstablishedQuotaEntity>): Promise<EstablishedQuotaEntity[]> {
    return this.establishedQuotaRepository.find(options);
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
