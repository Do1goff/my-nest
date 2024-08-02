import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateMilitaryDistrictDto } from './dto/CreateMilitaryDistrictDto.dto'
import { MilitaryDistrictsEntity } from './entity/militaryDistricts.entity'

@Injectable()
export class MilitaryDistrictsService {
  constructor(
    @InjectRepository(MilitaryDistrictsEntity)
    private militaryDistrictsRepository: Repository<MilitaryDistrictsEntity>,
  ) {}

  async create(data: CreateMilitaryDistrictDto): Promise<MilitaryDistrictsEntity> {
    const militaryDistricts = this.militaryDistrictsRepository.create(data);
    return this.militaryDistrictsRepository.save(militaryDistricts);
  }
  find(options?: FindManyOptions<MilitaryDistrictsEntity>): Promise<MilitaryDistrictsEntity[]> {
    return this.militaryDistrictsRepository.find(options);
  }

  findOne(options: FindOneOptions<MilitaryDistrictsEntity>): Promise<MilitaryDistrictsEntity> {
    return this.militaryDistrictsRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<MilitaryDistrictsEntity>,
    partialEntity: QueryDeepPartialEntity<MilitaryDistrictsEntity>,
  ) {
    return this.militaryDistrictsRepository.update(criteria, partialEntity);
  }
}
