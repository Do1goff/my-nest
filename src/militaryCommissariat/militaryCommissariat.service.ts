import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateMilitaryCommissariatDto } from './dto/CreateMilitaryCommissariatDto.dto'
import { MilitaryCommissariatsEntity } from './entity/militaryCommissariats.entity'

@Injectable()
export class MilitaryCommissariatService {
  constructor(
    @InjectRepository(MilitaryCommissariatsEntity)
    private militaryCommissariatRepository: Repository<MilitaryCommissariatsEntity>,
  ) {}

  async create(
    commissariatData: CreateMilitaryCommissariatDto,
  ): Promise<MilitaryCommissariatsEntity> {
    const militaryCommissariat =
      this.militaryCommissariatRepository.create(commissariatData);
    return this.militaryCommissariatRepository.save(militaryCommissariat);
  }

  // find(
  //   options: FindManyOptions<MilitaryCommissariatsEntity>,
  // ): Promise<MilitaryCommissariatsEntity[]> {
  //   return this.militaryCommissariatRepository.find(options);
  // }
  find(
    options?: FindManyOptions<MilitaryCommissariatsEntity>,
  ): Promise<MilitaryCommissariatsEntity[]> {
    return this.militaryCommissariatRepository.find(options);
  }

  findOne(
    options: FindOneOptions<MilitaryCommissariatsEntity>,
  ): Promise<MilitaryCommissariatsEntity> {
    return this.militaryCommissariatRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<MilitaryCommissariatsEntity>,
    partialEntity: QueryDeepPartialEntity<MilitaryCommissariatsEntity>,
  ) {
    return this.militaryCommissariatRepository.update(criteria, partialEntity);
  }
}
