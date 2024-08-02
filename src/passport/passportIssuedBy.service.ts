import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreatePassportIssuedByDto } from './dto/CreatePassportIssuedByDto.dto'
import { PassportIssuedByEntity } from './entity/passportIssuedBy.entity'

@Injectable()
export class PassportIssuedByService {
  constructor(
    @InjectRepository(PassportIssuedByEntity)
    private passportIssuedByRepository: Repository<PassportIssuedByEntity>,
  ) {}

  async create(data: CreatePassportIssuedByDto): Promise<PassportIssuedByEntity> {
    const issued_by = this.passportIssuedByRepository.create(data);
    return this.passportIssuedByRepository.save(issued_by);
  }
  find(
    options?: FindManyOptions<PassportIssuedByEntity>,
  ): Promise<PassportIssuedByEntity[]> {
    return this.passportIssuedByRepository.find(options);
  }

  findOne(
    options: FindOneOptions<PassportIssuedByEntity>,
  ): Promise<PassportIssuedByEntity> {
    return this.passportIssuedByRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<PassportIssuedByEntity>,
    partialEntity: QueryDeepPartialEntity<PassportIssuedByEntity>,
  ) {
    return this.passportIssuedByRepository.update(criteria, partialEntity);
  }
}
