import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateInstituteDto } from './dto/CreateInstituteDto.dto'
import { InstitutesEntity } from './entity/institutes.entity'

@Injectable()
export class InstitutesService {
  constructor(
    @InjectRepository(InstitutesEntity)
    private institutesRepository: Repository<InstitutesEntity>,
  ) {}

  async create(data: CreateInstituteDto): Promise<InstitutesEntity> {
    const institutes = this.institutesRepository.create(data);
    return this.institutesRepository.save(institutes);
  }
  find(
    options?: FindManyOptions<InstitutesEntity>,
  ): Promise<InstitutesEntity[]> {
    return this.institutesRepository.find(options);
  }

  findOne(
    options: FindOneOptions<InstitutesEntity>,
  ): Promise<InstitutesEntity> {
    return this.institutesRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<InstitutesEntity>,
    partialEntity: QueryDeepPartialEntity<InstitutesEntity>,
  ) {
    return this.institutesRepository.update(criteria, partialEntity);
  }
}
