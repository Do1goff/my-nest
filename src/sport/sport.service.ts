import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SportEntity } from 'src/sport/entity/sport.entity';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { CreateSportDto } from './dto/CreateSportDto.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class SportService {
    constructor(
        @InjectRepository(SportEntity) private sportRepository:Repository<SportEntity>,

    ){}

    async create(data: CreateSportDto): Promise<SportEntity> {
        const sport = this.sportRepository.create(data)
        return this.sportRepository.save(sport)
    }

    find(options?: FindManyOptions<SportEntity>): Promise<SportEntity[]> {
        return this.sportRepository.find(options)
    }
    findOne(options: FindOneOptions<SportEntity>): Promise<SportEntity>{
        return this.sportRepository.findOne(options)
    }

    update(criteria: FindOptionsWhere<SportEntity>, partialEntity: QueryDeepPartialEntity<SportEntity>){
        return this.sportRepository.update(criteria, partialEntity)
    }
}
 