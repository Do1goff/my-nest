import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { CategoryEducationEntity } from './entity/categoryEducation.entity'

@Injectable()
export class CategoryEducationService {
  constructor(
    @InjectRepository(CategoryEducationEntity)
    private categoryEducationRepository: Repository<CategoryEducationEntity>,
  ) {}

  find(
    options?: FindManyOptions<CategoryEducationEntity>,
  ): Promise<CategoryEducationEntity[]> {
    return this.categoryEducationRepository.find(options);
  }

}
