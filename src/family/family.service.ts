import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateFamilyDto } from './dto/CreateFamilyDto.dto'
import { FamilyEntity } from './entity/family.entity'

@Injectable()
export class FamilyService {
  constructor(
    @InjectRepository(FamilyEntity)
    private familyRepository: Repository<FamilyEntity>,
  ) {}

  async create(data: CreateFamilyDto): Promise<FamilyEntity> {
    const family = this.familyRepository.create(data);
    return this.familyRepository.save(family);
  }

  find(options?: FindManyOptions<FamilyEntity>): Promise<FamilyEntity[]> {
    return this.familyRepository.find(options);
  }
  findOne(options: FindOneOptions<FamilyEntity>): Promise<FamilyEntity> {
    return this.familyRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<FamilyEntity>,
    partialEntity: QueryDeepPartialEntity<FamilyEntity>,
  ) {
    return this.familyRepository.update(criteria, partialEntity);
  }
}
