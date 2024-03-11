import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { EntranceTestEntity } from './entity/entranceTest.entity';
import { CreateEntranceTestDto } from './dto/CreateEntranceTestDto.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class EntranceTestService {
    constructor(
        @InjectRepository(EntranceTestEntity) private entranceTestRepository:Repository<EntranceTestEntity>,

    ){}

    async create(data: CreateEntranceTestDto): Promise<EntranceTestEntity> {
        const entranceTest = this.entranceTestRepository.create(data)
        return this.entranceTestRepository.save(entranceTest)
    }

    find(options?: FindManyOptions<EntranceTestEntity>): Promise<EntranceTestEntity[]> {
        return this.entranceTestRepository.find(options)
    }
    findOne(options: FindOneOptions<EntranceTestEntity>): Promise<EntranceTestEntity>{
        return this.entranceTestRepository.findOne(options)
    }

    update(criteria: FindOptionsWhere<EntranceTestEntity>, partialEntity: QueryDeepPartialEntity<EntranceTestEntity>){
        return this.entranceTestRepository.update(criteria, partialEntity)
    }
} 
 