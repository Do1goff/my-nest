import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { FamilySocialStatusEntity } from './entity/familySocialStatus.entity'

@Injectable()
export class FamilySocialStatusService {
  constructor(
    @InjectRepository(FamilySocialStatusEntity)
    private familySocialStatusRepository: Repository<FamilySocialStatusEntity>,
  ) {}

  find(options?: FindManyOptions<FamilySocialStatusEntity>): Promise<FamilySocialStatusEntity[]> {
    return this.familySocialStatusRepository.find(options);
  }

}
