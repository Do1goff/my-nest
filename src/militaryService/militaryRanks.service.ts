import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { MilitaryRanksEntity } from './entity/militaryRanks.entity'

@Injectable()
export class MilitaryRanksService {
  constructor(
    @InjectRepository(MilitaryRanksEntity)
    private MilitaryRanksRepository: Repository<MilitaryRanksEntity>,
  ) {}

  find(
    options?: FindManyOptions<MilitaryRanksEntity>,
  ): Promise<MilitaryRanksEntity[]> {
    return this.MilitaryRanksRepository.find(options);
  }

}
