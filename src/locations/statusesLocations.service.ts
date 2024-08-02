import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateStatusLocationDto } from './dto/CreateStatusLocationDto.dto'
import { StatusesLocationsEntity } from './entity/statusesLocations.entity'

@Injectable()
export class StatusesLocationsService {
  constructor(
    @InjectRepository(StatusesLocationsEntity)
    private statusesLocationsRepository: Repository<StatusesLocationsEntity>,
  ) {}

  async create(data: CreateStatusLocationDto): Promise<StatusesLocationsEntity> {
    const statusesLocations = this.statusesLocationsRepository.create(data);
    return this.statusesLocationsRepository.save(statusesLocations);
  }
  find(options?: FindManyOptions<StatusesLocationsEntity>): Promise<StatusesLocationsEntity[]> {
    return this.statusesLocationsRepository.find(options);
  }

  findOne(options: FindOneOptions<StatusesLocationsEntity>): Promise<StatusesLocationsEntity> {
    return this.statusesLocationsRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<StatusesLocationsEntity>,
    partialEntity: QueryDeepPartialEntity<StatusesLocationsEntity>,
  ) {
    return this.statusesLocationsRepository.update(criteria, partialEntity);
  }
}
