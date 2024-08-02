import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateCityDto } from './dto/CreateCityDto.dto'
import { CitiesEntity } from './entity/cities.entity'

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CitiesEntity)
    private citiesRepository: Repository<CitiesEntity>,
  ) {}

  async create(data: CreateCityDto): Promise<CitiesEntity> {
    const cities = this.citiesRepository.create(data);
    return this.citiesRepository.save(cities);
  }
  find(options?: FindManyOptions<CitiesEntity>): Promise<CitiesEntity[]> {
    return this.citiesRepository.find(options);
  }

  // async findByRegion(regionId: number): Promise<CitiesEntity[]> {
  //   return this.citiesRepository.createQueryBuilder('region').leftJoinAndSelect('region.city', 'city').where('region.id = :regionId', {regionId}).getMany()
  // }

  findOne(options: FindOneOptions<CitiesEntity>): Promise<CitiesEntity> {
    return this.citiesRepository.findOne(options);
  } 

  update(
    criteria: FindOptionsWhere<CitiesEntity>,
    partialEntity: QueryDeepPartialEntity<CitiesEntity>,
  ) {
    return this.citiesRepository.update(criteria, partialEntity);
  }
}
