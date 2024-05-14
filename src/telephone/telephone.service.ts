import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateTelephoneDto } from './dto/CreateTelephoneDto.dto'
import { TelephoneEntity } from './entity/telephone.entity'

@Injectable()
export class TelephoneService {
  constructor(
    @InjectRepository(TelephoneEntity)
    private telephoneRepository: Repository<TelephoneEntity>,
  ) {}

  async create(data: CreateTelephoneDto): Promise<TelephoneEntity> {
    const telephone = this.telephoneRepository.create(data);
    return this.telephoneRepository.save(telephone);
  }

  find(options?: FindManyOptions<TelephoneEntity>): Promise<TelephoneEntity[]> {
    return this.telephoneRepository.find(options);
  }
  findOne(options: FindOneOptions<TelephoneEntity>): Promise<TelephoneEntity> {
    return this.telephoneRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<TelephoneEntity>,
    partialEntity: QueryDeepPartialEntity<TelephoneEntity>,
  ) {
    return this.telephoneRepository.update(criteria, partialEntity);
  }
}
