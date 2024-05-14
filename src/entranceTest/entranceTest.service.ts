import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateEntranceTestDto } from './dto/CreateEntranceTestDto.dto'
import { EntranceTestEntity } from './entity/entranceTest.entity'

@Injectable()
export class EntranceTestService {
  constructor(
    @InjectRepository(EntranceTestEntity)
    private entranceTestRepository: Repository<EntranceTestEntity>,
  ) {}

  // async create(data: CreateEntranceTestDto): Promise<EntranceTestEntity> {
  //     const entranceTest = this.entranceTestRepository.create(data)
  //     return this.entranceTestRepository.save(entranceTest)
  // }

  // find(options?: FindManyOptions<EntranceTestEntity>): Promise<EntranceTestEntity[]> {
  //     return this.entranceTestRepository.find(options)
  // }
  // findOne(options: FindOneOptions<EntranceTestEntity>): Promise<EntranceTestEntity>{
  //     return this.entranceTestRepository.findOne(options)
  // }

  // update(criteria: FindOptionsWhere<EntranceTestEntity>, partialEntity: QueryDeepPartialEntity<EntranceTestEntity>){
  //     return this.entranceTestRepository.update(criteria, partialEntity)
  // }

  async create(data: CreateEntranceTestDto): Promise<EntranceTestEntity> {
    const egeMark = this.entranceTestRepository.create(data);
    return this.entranceTestRepository.save(egeMark);
  }

  find(
    options?: FindManyOptions<EntranceTestEntity>,
  ): Promise<EntranceTestEntity[]> {
    return this.entranceTestRepository.find(options);
  }
  findOne(
    options: FindOneOptions<EntranceTestEntity>,
  ): Promise<EntranceTestEntity> {
    return this.entranceTestRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<EntranceTestEntity>,
    partialEntity: QueryDeepPartialEntity<EntranceTestEntity>,
  ) {
    return this.entranceTestRepository.update(criteria, partialEntity);
  }
}
