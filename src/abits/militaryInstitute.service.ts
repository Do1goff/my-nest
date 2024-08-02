import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { MilitaryInstituteEntity } from './entity/militaryInstitute.entity'

@Injectable()
export class MilitaryInstituteService {
  constructor(
    @InjectRepository(MilitaryInstituteEntity)
    private MilitaryInstituteRepository: Repository<MilitaryInstituteEntity>,
  ) {}

  find(
    options?: FindManyOptions<MilitaryInstituteEntity>,
  ): Promise<MilitaryInstituteEntity[]> {
    return this.MilitaryInstituteRepository.find(options);
  }
}
