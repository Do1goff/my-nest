import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { EstablishedQuotaEntity } from './entity/establishedQuota.entity'

@Injectable()
export class EstablishedQuotaService {
  constructor(
    @InjectRepository(EstablishedQuotaEntity)
    private establishedQuotaRepository: Repository<EstablishedQuotaEntity>,
  ) {}

  find(options?: FindManyOptions<EstablishedQuotaEntity>): Promise<EstablishedQuotaEntity[]> {
    return this.establishedQuotaRepository.find(options);
  }

}
