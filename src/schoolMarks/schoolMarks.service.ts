import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { SchoolMarksEntity } from './entity/schoolMarks.entity';
import { CreateSchoolMarksDto } from './dto/CreateSchoolMarksDto.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class SchoolMarksService {
    constructor(
        @InjectRepository(SchoolMarksEntity) private schoolMarksRepository:Repository<SchoolMarksEntity>,

    ){}

    async create(data: CreateSchoolMarksDto): Promise<SchoolMarksEntity> {
        const schoolMark = this.schoolMarksRepository.create(data)
        return this.schoolMarksRepository.save(schoolMark)
    }

    find(options?: FindManyOptions<SchoolMarksEntity>): Promise<SchoolMarksEntity[]> {
        return this.schoolMarksRepository.find(options)
    }
    findOne(options: FindOneOptions<SchoolMarksEntity>): Promise<SchoolMarksEntity>{
        return this.schoolMarksRepository.findOne(options)
    }

    update(criteria: FindOptionsWhere<SchoolMarksEntity>, partialEntity: QueryDeepPartialEntity<SchoolMarksEntity>){
        return this.schoolMarksRepository.update(criteria, partialEntity)
    }
}
