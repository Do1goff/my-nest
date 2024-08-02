import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateMilitaryUnitDto } from './dto/CreateMilitaryUnitDto.dto'
import { MilitaryUnitsEntity } from './entity/militaryUnits.entity'

@Injectable()
export class MilitaryUnitsService {
  constructor(
    @InjectRepository(MilitaryUnitsEntity)
    private militaryUnitsRepository: Repository<MilitaryUnitsEntity>,
  ) {}

  async create(data: CreateMilitaryUnitDto): Promise<MilitaryUnitsEntity> {
    const militaryUnits = this.militaryUnitsRepository.create(data);
    return this.militaryUnitsRepository.save(militaryUnits);
  }
  find(
    options?: FindManyOptions<MilitaryUnitsEntity>,
  ): Promise<MilitaryUnitsEntity[]> {
    return this.militaryUnitsRepository.find(options);
  }

  findOne(
    options: FindOneOptions<MilitaryUnitsEntity>,
  ): Promise<MilitaryUnitsEntity> {
    return this.militaryUnitsRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<MilitaryUnitsEntity>,
    partialEntity: QueryDeepPartialEntity<MilitaryUnitsEntity>,
  ) {
    return this.militaryUnitsRepository.update(criteria, partialEntity);
  }
}
