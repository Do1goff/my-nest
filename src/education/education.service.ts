import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateEducationDto } from './dto/CreateEducationDto.dto'
import { EducationEntity } from './entity/education.entity'

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(EducationEntity)
    private educationRepository: Repository<EducationEntity>,
  ) {}

  async create(data: CreateEducationDto): Promise<EducationEntity> {
    const education = this.educationRepository.create(data);
    return this.educationRepository.save(education);
  }
  find(options?: FindManyOptions<EducationEntity>): Promise<EducationEntity[]> {
    return this.educationRepository.find(options);
  }

  findOne(options: FindOneOptions<EducationEntity>): Promise<EducationEntity> {
    return this.educationRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<EducationEntity>,
    partialEntity: QueryDeepPartialEntity<EducationEntity>,
  ) {
    return this.educationRepository.update(criteria, partialEntity);
  }
}
