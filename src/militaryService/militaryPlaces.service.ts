import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { MilitaryPlacesEntity } from './entity/militaryPlaces.entity'

@Injectable()
export class MilitaryPlacesService {
  constructor(
    @InjectRepository(MilitaryPlacesEntity)
    private MilitaryPlacesRepository: Repository<MilitaryPlacesEntity>,
  ) {}

  find(
    options?: FindManyOptions<MilitaryPlacesEntity>,
  ): Promise<MilitaryPlacesEntity[]> {
    return this.MilitaryPlacesRepository.find(options);
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
