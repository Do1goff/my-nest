import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreatePassportDto } from './dto/CreatePassportDto.dto'
import { PassportEntity } from './entity/passport.entity'

@Injectable()
export class PassportService {
  constructor(
    @InjectRepository(PassportEntity)
    private passportRepository: Repository<PassportEntity>,
  ) {}

  async create(data: CreatePassportDto): Promise<PassportEntity> {
    const passport = this.passportRepository.create(data);
    return this.passportRepository.save(passport);
  }
  find(options?: FindManyOptions<PassportEntity>): Promise<PassportEntity[]> {
    return this.passportRepository.find(options);
  }

  findOne(options: FindOneOptions<PassportEntity>): Promise<PassportEntity> {
    return this.passportRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<PassportEntity>,
    partialEntity: QueryDeepPartialEntity<PassportEntity>,
  ) {
    return this.passportRepository.update(criteria, partialEntity);
  }
}
