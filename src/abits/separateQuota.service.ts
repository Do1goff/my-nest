import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { SeparateQuotaEntity } from './entity/separateQuota.entity'

@Injectable()
export class SeparateQuotaService {
  constructor(
    @InjectRepository(SeparateQuotaEntity)
    private separateQuotaRepository: Repository<SeparateQuotaEntity>,
  ) {}

  find(options?: FindManyOptions<SeparateQuotaEntity>): Promise<SeparateQuotaEntity[]> {
    return this.separateQuotaRepository.find(options);
  }

}
