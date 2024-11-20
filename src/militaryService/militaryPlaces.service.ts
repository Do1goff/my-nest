import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'
import { MilitaryPlacesEntity } from './entity/militaryPlaces.entity'

@Injectable()
export class MilitaryPlacesService {
  constructor(
    @InjectRepository(MilitaryPlacesEntity)
    private MilitaryPlacesRepository: Repository<MilitaryPlacesEntity>,
  ) {}

  find(
    options?: FindManyOptions<MilitaryPlacesEntity>,
  ): Promise<MilitaryPlacesEntity[]> {
    return this.MilitaryPlacesRepository.find(options);
  }
}
