import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { SubjectsEntity } from './entity/subjects.entity'

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(SubjectsEntity)
    private subjectsRepository: Repository<SubjectsEntity>,
  ) {}

  find(options?: FindManyOptions<SubjectsEntity>): Promise<SubjectsEntity[]> {
    return this.subjectsRepository.find(options);
  }

}
