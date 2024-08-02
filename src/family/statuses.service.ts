import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateStatusDto } from './dto/CreateStatusDto.dto'
import { StatusesEntity } from './entity/statuses.entity'

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(StatusesEntity)
    private statusesRepository: Repository<StatusesEntity>,
  ) {}

  async create(data: CreateStatusDto): Promise<StatusesEntity> {
    const statuses = this.statusesRepository.create(data);
    return this.statusesRepository.save(statuses);
  }
  find(options?: FindManyOptions<StatusesEntity>): Promise<StatusesEntity[]> {
    return this.statusesRepository.find(options);
  }

  findOne(options: FindOneOptions<StatusesEntity>): Promise<StatusesEntity> {
    return this.statusesRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<StatusesEntity>,
    partialEntity: QueryDeepPartialEntity<StatusesEntity>,
  ) {
    return this.statusesRepository.update(criteria, partialEntity);
  }
}
