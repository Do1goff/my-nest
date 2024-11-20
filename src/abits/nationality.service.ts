import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { NationalityEntity } from './entity/nationality.entity'

@Injectable()
export class AbitNationalityService {
  constructor(
    @InjectRepository(NationalityEntity)
    private abitNationalityRepository: Repository<NationalityEntity>,
  ) {}

  find(
    options?: FindManyOptions<NationalityEntity>,
  ): Promise<NationalityEntity[]> {
    return this.abitNationalityRepository.find(options);
  }

}
