import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateDistrictDto } from './dto/CreateDistrictDto.dto'
import { DistrictsEntity } from './entity/districts.entity'

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(DistrictsEntity)
    private districtsRepository: Repository<DistrictsEntity>,
  ) {}

  async create(data: CreateDistrictDto): Promise<DistrictsEntity> {
    const districts = this.districtsRepository.create(data);
    return this.districtsRepository.save(districts);
  }
  find(options?: FindManyOptions<DistrictsEntity>): Promise<DistrictsEntity[]> {
    return this.districtsRepository.find(options);
  }

  async findCitiesByDistrict(districtId: number) {
    return this.districtsRepository.createQueryBuilder('district').leftJoinAndSelect('district.cities', 'city').where('district.id = :districtId', {districtId}).getOne()
  }

  findOne(options: FindOneOptions<DistrictsEntity>): Promise<DistrictsEntity> {
    return this.districtsRepository.findOne(options);
  } 

  update(
    criteria: FindOptionsWhere<DistrictsEntity>,
    partialEntity: QueryDeepPartialEntity<DistrictsEntity>,
  ) {
    return this.districtsRepository.update(criteria, partialEntity);
  }
}
