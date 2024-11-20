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

}
