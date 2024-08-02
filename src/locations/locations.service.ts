import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateLocationDto } from './dto/CreateLocationDto.dto'
import { LocationsEntity } from './entity/locations.entity'

@Injectable()
export class LocationsService {
  constructor( 
    @InjectRepository(LocationsEntity)
    private locationsRepository: Repository<LocationsEntity>,
  ) {}

  async create(data: CreateLocationDto): Promise<LocationsEntity> {
    const locations = this.locationsRepository.create(data);
    return this.locationsRepository.save(locations); 
  }
  find(options?: FindManyOptions<LocationsEntity>): Promise<LocationsEntity[]> {
    return this.locationsRepository.find(options);
  }

  findOne(options: FindOneOptions<LocationsEntity>): Promise<LocationsEntity> {
    return this.locationsRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<LocationsEntity>,
    partialEntity: QueryDeepPartialEntity<LocationsEntity>,
  ) {
    return this.locationsRepository.update(criteria, partialEntity);
  }
}
