import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { ExercisesEntity } from './entity/exercises.entity'

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExercisesEntity)
    private exercisesRepository: Repository<ExercisesEntity>,
  ) {}

  find(options?: FindManyOptions<ExercisesEntity>): Promise<ExercisesEntity[]> {
    return this.exercisesRepository.find(options);
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
