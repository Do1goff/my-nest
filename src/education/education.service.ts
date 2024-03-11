import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationEntity } from 'src/education/entity/education.entity';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { CreateEducationDto } from './dto/CreateEducationDto.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class EducationService {
    constructor(
        @InjectRepository(EducationEntity) private educationRepository:Repository<EducationEntity>,

    ){}
    
    find(options?: FindManyOptions<EducationEntity>): Promise<EducationEntity[]> {
        return this.educationRepository.find(options)
    }

    findOne(options: FindOneOptions<EducationEntity>): Promise<EducationEntity>{
        return this.educationRepository.findOne(options)
    }

    create(data: CreateEducationDto): Promise<EducationEntity> {
        const newEducation = this.educationRepository.create(data)
        return this.educationRepository.save(newEducation)
    }
    

    update(criteria: FindOptionsWhere<EducationEntity>, partialEntity: QueryDeepPartialEntity<EducationEntity>){
        return this.educationRepository.update(criteria, partialEntity)
    }

    delete(criteria: FindOptionsWhere<EducationEntity>){
        return this.educationRepository.delete(criteria)
    }

 
}
