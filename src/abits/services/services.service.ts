import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Abit } from 'src/typeorm/entities/Abit';
import { Father } from 'src/typeorm/entities/Father';
import { Mother } from 'src/typeorm/entities/Mother';
import { Pasport } from 'src/typeorm/entities/Pasort';
import { Tel } from 'src/typeorm/entities/Tel';
import { CreateAbitParams, CreateAbitPasportParams, CreateAbitTelParams, CreateParentParams, UpdateAbitParams, } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AbitService {
    constructor(
        @InjectRepository(Abit) private abitRepository: Repository<Abit> ,
        @InjectRepository(Tel) private telRepository: Repository<Tel> ,
        @InjectRepository(Father) private fatherRepository: Repository<Father> ,
        @InjectRepository(Mother) private motherRepository: Repository<Mother> ,
        @InjectRepository(Pasport) private pasportRepository: Repository<Pasport>) {}

    findAbits() {
        return this.abitRepository.find({ relations:['tels', 'pasport','mother', 'father']})
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

    async createMother(id:number, MotherDetails: CreateParentParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newMother = this.motherRepository.create(MotherDetails)
        const savedMother = await this.motherRepository.save(newMother)
        abit.mother = savedMother
        return this.abitRepository.save(abit)
    }

    async createFather(id:number, FatherDetails: CreateParentParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newFather = this.fatherRepository.create(FatherDetails)
        const savedFather = await this.fatherRepository.save(newFather)
        abit.father = savedFather
        return this.abitRepository.save(abit)
    }

}