import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Abit } from 'src/typeorm/entities/Abit';
import { Father } from 'src/typeorm/entities/Parent/Father';
import { Mother } from 'src/typeorm/entities/Parent/Mother';
import { Pasport } from 'src/typeorm/entities/Docs/Pasport';
import { CreateAbitParams, CreateAbitPasportParams, CreateDopParams, CreateEGEParams, CreateINNParams, CreateInfoParams, CreateKazakParams, CreateLDParams, CreateL_NumParams, CreateMVDParams, CreateMarksParams, CreateMedParams, CreateObrazovParams, CreatePOParams, CreateParentParams, CreatePh_PParams, CreateSNILSParams, CreateSpecParams, CreateVKParams, CreateZGTParams, UpdateAbitParams, } from 'src/utils/types';
import { Repository } from 'typeorm';
import { INN } from 'src/typeorm/entities/Docs/INN';
import { SNILS } from 'src/typeorm/entities/Docs/SNILS';
import { Med } from 'src/typeorm/entities/Godn/Med';
import { MVD } from 'src/typeorm/entities/Godn/MVD';
import { P_O } from 'src/typeorm/entities/Godn/PO';
import { ZGT } from 'src/typeorm/entities/Godn/ZGT';
import { Info } from 'src/typeorm/entities/Info/Info';
import { Kazak } from 'src/typeorm/entities/Info/Kazak';
import { VK } from 'src/typeorm/entities/Info/VK';
import { Marks } from 'src/typeorm/entities/Obrazov/Marks';
import { Obrazov } from 'src/typeorm/entities/Obrazov/Obrazov';
import { L_Num } from 'src/typeorm/entities/Personal/L_Num';
import { LD } from 'src/typeorm/entities/Personal/LD';
import { Dop } from 'src/typeorm/entities/Rating/Dop';
import { EGE } from 'src/typeorm/entities/Rating/EGE';
import { Ph_P } from 'src/typeorm/entities/Rating/Ph_P';
import { Spec } from 'src/typeorm/entities/Personal/Spec';

@Injectable()
export class AbitService {
    constructor(
        @InjectRepository(Abit) private abitRepository: Repository<Abit> ,
        @InjectRepository(Father) private fatherRepository: Repository<Father> ,
        @InjectRepository(Mother) private motherRepository: Repository<Mother> ,
        @InjectRepository(INN) private INNRepository: Repository<INN> ,
        @InjectRepository(SNILS) private SNILSRepository: Repository<SNILS> ,
        @InjectRepository(Med) private MedRepository: Repository<Med> ,
        @InjectRepository(MVD) private MVDRepository: Repository<MVD> ,
        @InjectRepository(P_O) private P_ORepository: Repository<P_O> ,
        @InjectRepository(ZGT) private ZGTRepository: Repository<ZGT> ,
        @InjectRepository(Info) private InfoRepository: Repository<Info> ,
        @InjectRepository(Kazak) private KazakRepository: Repository<Kazak> ,
        @InjectRepository(VK) private VKRepository: Repository<VK> ,
        @InjectRepository(Marks) private MarksRepository: Repository<Marks> ,
        @InjectRepository(Obrazov) private ObrazovRepository: Repository<Obrazov> ,
        @InjectRepository(L_Num) private L_NumRepository: Repository<L_Num> ,
        @InjectRepository(LD) private LDRepository: Repository<LD> ,
        @InjectRepository(Spec) private SpecRepository: Repository<Spec> ,
        @InjectRepository(Dop) private DopRepository: Repository<Dop> ,
        @InjectRepository(EGE) private EGERepository: Repository<EGE> ,
        @InjectRepository(Ph_P) private Ph_PRepository: Repository<Ph_P> ,
        @InjectRepository(Pasport) private pasportRepository: Repository<Pasport>) {}
    
    findAbits() {
        return this.abitRepository.find({ relations:[
            'info',
            'pasport',
            'mother',
            'father',
            'ld',
            'l_num',
            'spec',
            'ege',
            'ph_p',
            'dop',
            'obrazov',
            'marks',
            'vk',
            'inn',
            'snils',
            'med',
            'mvd',
            'p_o',
            'zgt',
            'kazak',
        ]})
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

    async createINN(id:number, INNDetails: CreateINNParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newINN = this.INNRepository.create(INNDetails)
        const savedINN = await this.INNRepository.save(newINN)
        abit.inn = savedINN
        return this.abitRepository.save(abit)
    }

    async createSNILS(id:number, SNILSDetails: CreateSNILSParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newSNILS = this.SNILSRepository.create(SNILSDetails)
        const savedSNILS = await this.SNILSRepository.save(newSNILS)
        abit.snils = savedSNILS
        return this.abitRepository.save(abit)
    }

    async createMed(id:number, MedDetails: CreateMedParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newMed = this.MedRepository.create(MedDetails)
        const savedMed = await this.MedRepository.save(newMed)
        abit.med = savedMed
        return this.abitRepository.save(abit)
    }

    async createMVD(id:number, MVDDetails: CreateMVDParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newMVD = this.MVDRepository.create(MVDDetails)
        const savedMVD = await this.MVDRepository.save(newMVD)
        abit.mvd = savedMVD
        return this.abitRepository.save(abit)
    }

    async createPO(id:number, PODetails: CreatePOParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newPO = this.P_ORepository.create(PODetails)
        const savedPO = await this.P_ORepository.save(newPO)
        abit.p_o = savedPO
        return this.abitRepository.save(abit)
    }

    async createZGT(id:number, ZGTDetails: CreateZGTParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newZGT = this.ZGTRepository.create(ZGTDetails)
        const savedZGT = await this.ZGTRepository.save(newZGT)
        abit.zgt = savedZGT
        return this.abitRepository.save(abit)
    }

    async createInfo(id:number, InfoDetails: CreateInfoParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newInfo = this.InfoRepository.create(InfoDetails)
        const savedInfo = await this.InfoRepository.save(newInfo)
        abit.info = savedInfo
        return this.abitRepository.save(abit)
    }

    async createKazak(id:number, KazakDetails: CreateKazakParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newKazak = this.KazakRepository.create(KazakDetails)
        const savedKazak = await this.KazakRepository.save(newKazak)
        abit.kazak = savedKazak
        return this.abitRepository.save(abit)
    }

    async createVK(id:number, VKDetails: CreateVKParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newVK = this.VKRepository.create(VKDetails)
        const savedVK = await this.VKRepository.save(newVK)
        abit.vk = savedVK
        return this.abitRepository.save(abit)
    }

    async createMarks(id:number, MarksDetails: CreateMarksParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newMarks = this.MarksRepository.create(MarksDetails)
        const savedMarks = await this.MarksRepository.save(newMarks)
        abit.marks = savedMarks
        return this.abitRepository.save(abit)
    }

    async createObrazov(id:number, ObrazovDetails: CreateObrazovParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newObrazov = this.ObrazovRepository.create(ObrazovDetails)
        const savedObrazov = await this.ObrazovRepository.save(newObrazov)
        abit.obrazov = savedObrazov
        return this.abitRepository.save(abit)
    }

    async createL_Num(id:number, L_NumDetails: CreateL_NumParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newL_Num = this.L_NumRepository.create(L_NumDetails)
        const savedL_Num = await this.L_NumRepository.save(newL_Num)
        abit.l_num = savedL_Num
        return this.abitRepository.save(abit)
    }

    async createLD(id:number, LDDetails: CreateLDParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newLD = this.LDRepository.create(LDDetails)
        const savedLD = await this.LDRepository.save(newLD)
        abit.ld = savedLD
        return this.abitRepository.save(abit)
    }

    async createSpec(id:number, SpecDetails: CreateSpecParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newSpec = this.SpecRepository.create(SpecDetails)
        const savedSpec = await this.SpecRepository.save(newSpec)
        abit.spec = savedSpec
        return this.abitRepository.save(abit)
    }

    

    async createDop(id:number, DopDetails: CreateDopParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newDop = this.DopRepository.create(DopDetails)
        const savedDop = await this.DopRepository.save(newDop)
        abit.dop = savedDop
        return this.abitRepository.save(abit)
    }

    async createEGE(id:number, EGEDetails: CreateEGEParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newEGE = this.EGERepository.create(EGEDetails)
        const savedEGE = await this.EGERepository.save(newEGE)
        abit.ege = savedEGE
        return this.abitRepository.save(abit)
    }
    async createPh_P(id:number, Ph_PDetails: CreatePh_PParams) {
        const abit = await this.abitRepository.findOneBy({ id })
        if (!abit)
            throw new HttpException(
                'Aбитуриент не найден',
                HttpStatus.BAD_REQUEST)

        const newPh_P = this.Ph_PRepository.create(Ph_PDetails)
        const savedPh_P = await this.Ph_PRepository.save(newPh_P)
        abit.ph_p = savedPh_P
        return this.abitRepository.save(abit)
    }

}