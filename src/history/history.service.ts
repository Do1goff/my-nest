import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { HistoryDto } from 'src/history/dto/HistoryDto.dto'
import { History } from 'src/history/entity/history.entity'
import {
  FindManyOptions,
  FindOptionsWhere,
  Repository
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<History>,
  ) {}

  find(options?: FindManyOptions<History>): Promise<History[]> {
    return this.historyRepository.find(options);
  }

  async create(historyDetails: HistoryDto): Promise<History> {
    const newHistory = this.historyRepository.create(historyDetails); 
    return this.historyRepository.save(newHistory);
  } 
 
  update(
    criteria: FindOptionsWhere<History>,
    partialEntity: QueryDeepPartialEntity<History>,
  ) {
    return this.historyRepository.update(criteria, partialEntity);
  }
  
  delete(criteria: FindOptionsWhere<History>) {
    return this.historyRepository.delete(criteria); 
  }
}
