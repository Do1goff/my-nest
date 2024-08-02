import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateUncanceledEducationDto } from './dto/CreateUncanceledEducationDto.dto'
import { UncanceledEducationEntity } from './entity/uncanceledEducation.entity'

@Injectable()
export class UncanceledEducationService {
  constructor(
    @InjectRepository(UncanceledEducationEntity)
    private uncanceledEducationRepository: Repository<UncanceledEducationEntity>,
  ) {}

  async create(data: CreateUncanceledEducationDto): Promise<UncanceledEducationEntity> {
    const UncanceledEducation = this.uncanceledEducationRepository.create(data);
    return this.uncanceledEducationRepository.save(UncanceledEducation);
  }
  find(options?: FindManyOptions<UncanceledEducationEntity>): Promise<UncanceledEducationEntity[]> {
    return this.uncanceledEducationRepository.find(options);
  }

  findOne(options: FindOneOptions<UncanceledEducationEntity>): Promise<UncanceledEducationEntity> {
    return this.uncanceledEducationRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<UncanceledEducationEntity>,
    partialEntity: QueryDeepPartialEntity<UncanceledEducationEntity>,
  ) {
    return this.uncanceledEducationRepository.update(criteria, partialEntity);
  }
}
