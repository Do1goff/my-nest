import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { PriorityRightEntity } from './entity/priorityRight.entity'

@Injectable()
export class PriorityRightService {
  constructor(
    @InjectRepository(PriorityRightEntity)
    private priorityRightRepository: Repository<PriorityRightEntity>,
  ) {}

  find(
    options?: FindManyOptions<PriorityRightEntity>,
  ): Promise<PriorityRightEntity[]> {
    return this.priorityRightRepository.find(options);
  }

}
