import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { FormEntranceTestEntity } from './entity/formEntranceTest.entity'

@Injectable()
export class FormsEntranceTestService {
  constructor(
    @InjectRepository(FormEntranceTestEntity)
    private formEntranceTestRepository: Repository<FormEntranceTestEntity>,
  ) {}

  find(options?: FindManyOptions<FormEntranceTestEntity>): Promise<FormEntranceTestEntity[]> {
    return this.formEntranceTestRepository.find(options);
  }

}
