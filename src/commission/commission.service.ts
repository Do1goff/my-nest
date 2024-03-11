import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateCommissionDto } from './dto/CreateCommissionDto.dto'
import { CommissionEntity } from './entity/commission.entity'

@Injectable()
export class CommissionService {
  constructor(
    @InjectRepository(CommissionEntity)
    private commissionRepository: Repository<CommissionEntity>,
  ) {}

  async create(
    commissariatData: CreateCommissionDto,
  ): Promise<CommissionEntity> {
    const commission = this.commissionRepository.create(commissariatData);
    return this.commissionRepository.save(commission);
  }
  find(
    options?: FindManyOptions<CommissionEntity>,
  ): Promise<CommissionEntity[]> {
    return this.commissionRepository.find(options);
  }

  findOne(
    options: FindOneOptions<CommissionEntity>,
  ): Promise<CommissionEntity> {
    return this.commissionRepository.findOne(options);
  }

  update(
    criteria: FindOptionsWhere<CommissionEntity>,
    partialEntity: QueryDeepPartialEntity<CommissionEntity>,
  ) {
    return this.commissionRepository.update(criteria, partialEntity);
  }
}
