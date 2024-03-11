import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { CossackSocietyEntity } from './entity/cossackSociety.entity'

@Injectable()
export class CossackSocietyService {
  constructor(
    @InjectRepository(CossackSocietyEntity)
    private abitCossackSocietyRepository: Repository<CossackSocietyEntity>,
  ) {}

  find(
    options?: FindManyOptions<CossackSocietyEntity>,
  ): Promise<CossackSocietyEntity[]> {
    return this.abitCossackSocietyRepository.find(options);
  }
}
