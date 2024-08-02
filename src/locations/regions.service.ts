import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateRegionDto } from './dto/CreateRegionDto.dto'
import { RegionsEntity } from './entity/regions.entity'

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(RegionsEntity)
    private regionsRepository: Repository<RegionsEntity>,
  ) {}

  async create(data: CreateRegionDto): Promise<RegionsEntity> {
    const regions = this.regionsRepository.create(data);
    return this.regionsRepository.save(regions); 
  }
  find(options?: FindManyOptions<RegionsEntity>): Promise<RegionsEntity[]> {
    return this.regionsRepository.find(options);
  }

  findOne(options: FindOneOptions<RegionsEntity>): Promise<RegionsEntity> {
    return this.regionsRepository.findOne(options);
  }
  
  async findDistrictsByRegion(regionId: number) {
    return this.regionsRepository.createQueryBuilder('region').leftJoinAndSelect('region.districts', 'city').where('region.id = :regionId', {regionId}).getOne()
  }

  update(
    criteria: FindOptionsWhere<RegionsEntity>,
    partialEntity: QueryDeepPartialEntity<RegionsEntity>,
  ) {
    return this.regionsRepository.update(criteria, partialEntity);
  }
}
