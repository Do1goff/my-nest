import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateReasonExpulsionDto } from './dto/CreateReasonExpulsionDto.dto'
import { ReasonsEntity } from './entity/reasons.entity'

@Injectable()
export class ReasonsService {
  constructor(
    @InjectRepository(ReasonsEntity)
    private reasonsRepository: Repository<ReasonsEntity>,
  ) {}

  async create(data: CreateReasonExpulsionDto): Promise<ReasonsEntity> {
    const reasons = this.reasonsRepository.create(data);
    return this.reasonsRepository.save(reasons);
  }
  find(options?: FindManyOptions<ReasonsEntity>): Promise<ReasonsEntity[]> {
    return this.reasonsRepository.find(options);
  }

  findOne(options: FindOneOptions<ReasonsEntity>): Promise<ReasonsEntity> {
    return this.reasonsRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<ReasonsEntity>,
    partialEntity: QueryDeepPartialEntity<ReasonsEntity>,
  ) {
    return this.reasonsRepository.update(criteria, partialEntity);
  }
}
