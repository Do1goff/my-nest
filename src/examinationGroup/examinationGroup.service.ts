import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateExaminationGroupDto } from './dto/CreateExaminationGroupDto.dto'
import { ExaminationGroupEntity } from './entity/examinationGroup.entity'

@Injectable()
export class ExaminationGroupService {
  constructor( 
    @InjectRepository(ExaminationGroupEntity)
    private examinationGroupRepository: Repository<ExaminationGroupEntity>,
  ) {}

  async create( 
    data: CreateExaminationGroupDto,
  ): Promise<ExaminationGroupEntity> {
    const examinationGroup = this.examinationGroupRepository.create(data);
    return this.examinationGroupRepository.save(examinationGroup);
  }

  find(
    options?: FindManyOptions<ExaminationGroupEntity>,
  ): Promise<ExaminationGroupEntity[]> {
    return this.examinationGroupRepository.find(options);
  }

  findOne(
    options: FindOneOptions<ExaminationGroupEntity>,
  ): Promise<ExaminationGroupEntity> {
    return this.examinationGroupRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<ExaminationGroupEntity>,
    partialEntity: QueryDeepPartialEntity<ExaminationGroupEntity>,
  ) {
    return this.examinationGroupRepository.update(criteria, partialEntity);
  }
}
