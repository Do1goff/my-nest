import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateAddressDto } from './dto/CreateAddressDto.dto'
import { AddressesEntity } from './entity/addresses.entity'

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressesEntity)
    private addressesRepository: Repository<AddressesEntity>,
  ) {}

  async create(commissariatData: CreateAddressDto): Promise<AddressesEntity> {
    const addresses = this.addressesRepository.create(commissariatData);
    return this.addressesRepository.save(addresses);
  }
  find(options?: FindManyOptions<AddressesEntity>): Promise<AddressesEntity[]> {
    return this.addressesRepository.find(options);
  }

  findOne(options: FindOneOptions<AddressesEntity>): Promise<AddressesEntity> {
    return this.addressesRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<AddressesEntity>,
    partialEntity: QueryDeepPartialEntity<AddressesEntity>,
  ) {
    return this.addressesRepository.update(criteria, partialEntity);
  }
}
