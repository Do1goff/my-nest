import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Abit } from 'src/typeorm/entities/Abit';
import { Mother } from 'src/typeorm/entities/Mother';
import { Parent } from 'src/typeorm/entities/Parent';
import { Pasport } from 'src/typeorm/entities/Pasort';
import { Tel } from 'src/typeorm/entities/Tel';
import { CreateAbitParams, CreateAbitPasportParams, CreateAbitTelParams, CreateParentParams, ParentParams, UpdateAbitParams, } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AbitService {
    constructor(
        @InjectRepository(Abit) private abitRepository: Repository<Abit> ,
        @InjectRepository(Tel) private telRepository: Repository<Tel> ,
        @InjectRepository(Parent) private parentRepository: Repository<Parent> ,
        @InjectRepository(Mother) private motherRepository: Repository<Mother> ,
        @InjectRepository(Pasport) private pasportRepository: Repository<Pasport>) {}

    findAbits() {
        return this.abitRepository.find({ relations:['tels', 'pasport','parents']})
    }

    findOneAbit(id:number){
        return this.abitRepository.findOneBy({id})
    }

    createAbit(abitDetails: CreateAbitParams) {
        const newAbit = this.abitRepository.create({
            ...abitDetails,
        })
        return this.abitRepository.save(newAbit)
    }
    
    updateAbit(id: number, updateAbitDetails:UpdateAbitParams){
        return this.abitRepository.update({ id }, {...updateAbitDetails})
    }

    deleteAbit(id:number){
        return this.abitRepository.delete({ id })
    }

    async createAbitPasport(id:number, AbitPasportDetails: CreateAbitPasportParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newPasport = this.pasportRepository.create(AbitPasportDetails)
        const savedPasport = await this.pasportRepository.save(newPasport)
        abit.pasport = savedPasport
        return this.abitRepository.save(abit)
    }

    async createAbitTel(id:number, abitTelDetails: CreateAbitTelParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Абитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newTel = this.telRepository.create({...abitTelDetails, abit,})
        return this.telRepository.save(newTel)
    }

    async createMother(id:number, motherDetails: CreateParentParams, parentDetails:ParentParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Абитуриент не найден',
                HttpStatus.BAD_REQUEST)
    
            
        

        // const newMother = this.motherRepository.create({
        //     ...motherDetails,
        // })
        // return this.motherRepository.save(newMother)
                

    }

}