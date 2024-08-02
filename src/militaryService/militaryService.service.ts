import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateMilitaryServiceDto } from './dto/CreateMilitaryServiceDto.dto'
import { MilitaryServiceEntity } from './entity/militaryService.entity'

@Injectable()
export class MilitaryServiceService {
  constructor(
    @InjectRepository(MilitaryServiceEntity)
    private militaryServiceRepository: Repository<MilitaryServiceEntity>,
  ) {}

  async create(data: CreateMilitaryServiceDto): Promise<MilitaryServiceEntity> {
    const militaryService = this.militaryServiceRepository.create(data);
    return this.militaryServiceRepository.save(militaryService);
  }
  find(options?: FindManyOptions<MilitaryServiceEntity>): Promise<MilitaryServiceEntity[]> {
    return this.militaryServiceRepository.find(options);
  }

  findOne(options: FindOneOptions<MilitaryServiceEntity>): Promise<MilitaryServiceEntity> {
    return this.militaryServiceRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<MilitaryServiceEntity>,
    partialEntity: QueryDeepPartialEntity<MilitaryServiceEntity>,
  ) {
    return this.militaryServiceRepository.update(criteria, partialEntity);
  }
}
