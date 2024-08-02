import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { CategoryUncanceledEducationEntity } from './entity/categoryUncanceledEducation.entity'

@Injectable()
export class CategoryUncanceledEducationService {
  constructor(
    @InjectRepository(CategoryUncanceledEducationEntity)
    private categoryUncanceledEducationRepository: Repository<CategoryUncanceledEducationEntity>,
  ) {}

  find(
    options?: FindManyOptions<CategoryUncanceledEducationEntity>,
  ): Promise<CategoryUncanceledEducationEntity[]> {
    return this.categoryUncanceledEducationRepository.find(options);
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
