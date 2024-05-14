import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { CreateAbitDto } from './dto/CreateAbit.dto'

@Injectable()
export class AbitService {
  constructor(
    @InjectRepository(AbitEntity)
    private abitRepository: Repository<AbitEntity>,
  ) {}

  find(options?: FindManyOptions<AbitEntity>): Promise<AbitEntity[]> {
    return this.abitRepository.find(options);
  }

  findOne(options: FindOneOptions<AbitEntity>): Promise<AbitEntity> {
    return this.abitRepository.findOne(options);
  }

  async create(abitDetails: CreateAbitDto): Promise<AbitEntity> {
    const newAbit = this.abitRepository.create(abitDetails);
    const abits = await this.abitRepository.find({});
    const count =
      abits.filter(
        (abit) =>
          abit.lastName.charAt(0).toUpperCase() ===
          newAbit.lastName.charAt(0).toUpperCase(),
      ).length + 1;
    newAbit.personal_file_number = `${newAbit.lastName
      .charAt(0)
      .toUpperCase()}-${count}`;
    return this.abitRepository.save(newAbit);
  } 

  update(
    criteria: FindOptionsWhere<AbitEntity>,
    partialEntity: QueryDeepPartialEntity<AbitEntity>,
  ) {
    return this.abitRepository.update(criteria, partialEntity);
  }

  delete(criteria: FindOptionsWhere<AbitEntity>) {
    return this.abitRepository.delete(criteria);
  }
}
