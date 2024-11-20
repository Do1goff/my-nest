import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { SpecialtyEntity } from './entity/specialties.entity'

@Injectable()
export class AbitSpecialtyService {
  constructor(
    @InjectRepository(SpecialtyEntity)
    private abitSpecialtyRepository: Repository<SpecialtyEntity>,
  ) {}

  find(options?: FindManyOptions<SpecialtyEntity>): Promise<SpecialtyEntity[]> {
    return this.abitSpecialtyRepository.find(options);
  }

}
