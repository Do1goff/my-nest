import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { MilitarySVOEntity } from './entity/militarySVO.entity'

@Injectable()
export class MilitarySVOService {
  constructor(
    @InjectRepository(MilitarySVOEntity)
    private MilitarySVORepository: Repository<MilitarySVOEntity>,
  ) {}

  find(
    options?: FindManyOptions<MilitarySVOEntity>,
  ): Promise<MilitarySVOEntity[]> {
    return this.MilitarySVORepository.find(options);
  }
 
}
