import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { EgeMarksEntity } from './entity/egeMarks.entity';
import { CreateEgeMarksDto } from './dto/CreateEgeMarksDto.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class EgeMarksService {
    constructor(
        @InjectRepository(EgeMarksEntity) private egeMarksRepository:Repository<EgeMarksEntity>,

    ){}


    async create(data: CreateEgeMarksDto): Promise<EgeMarksEntity> {
        const egeMark = this.egeMarksRepository.create(data)
        return this.egeMarksRepository.save(egeMark)
    }

    find(options?: FindManyOptions<EgeMarksEntity>): Promise<EgeMarksEntity[]> {
        return this.egeMarksRepository.find(options)
    }

    findOne(options: FindOneOptions<EgeMarksEntity>): Promise<EgeMarksEntity>{
        return this.egeMarksRepository.findOne(options)
    }

    update(criteria: FindOptionsWhere<EgeMarksEntity>, partialEntity: QueryDeepPartialEntity<EgeMarksEntity>){
        return this.egeMarksRepository.update(criteria, partialEntity)
    }
}
 