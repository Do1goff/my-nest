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

}
