import { Module } from '@nestjs/common';
import { AbitService } from './services/services.service';
import { AbitsController} from './controllers/controllers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasport } from '../typeorm/entities/Docs/Pasport';
import { Abit } from '../typeorm/entities/Abit';
import { Mother } from '../typeorm/entities/Parent/Mother';
import { Father } from '../typeorm/entities/Parent/Father';
import { INN } from '../typeorm/entities/Docs/INN';
import { SNILS } from '../typeorm/entities/Docs/SNILS';
import { Med } from '../typeorm/entities/Godn/Med';
import { MVD } from '../typeorm/entities/Godn/MVD';
import { P_O } from '../typeorm/entities/Godn/PO';
import { ZGT } from '../typeorm/entities/Godn/ZGT';
import { Info } from '../typeorm/entities/Info/Info';
import { Kazak } from '../typeorm/entities/Info/Kazak';
import { VK } from '../typeorm/entities/Info/VK';
import { Marks } from '../typeorm/entities/Obrazov/Marks';
import { Obrazov } from '../typeorm/entities/Obrazov/Obrazov';
import { L_Num } from '../typeorm/entities/Personal/L_Num';
import { LD } from '../typeorm/entities/Personal/LD';
import { Dop } from '../typeorm/entities/Rating/Dop';
import { EGE } from '../typeorm/entities/Rating/EGE';
import { Ph_P } from '../typeorm/entities/Rating/Ph_P';
import { Spec } from 'src/typeorm/entities/Personal/Spec';
import { Vst_Isp } from 'src/typeorm/entities/Rating/Vst_Isp';
import { Family } from 'src/typeorm/entities/Parent/Family';
import { Tek_Obr } from 'src/typeorm/entities/Obrazov/Tek_Obr';
import { VS } from 'src/typeorm/entities/Info/VS';
import { Zachisl } from 'src/typeorm/entities/Personal/Zachisl';

@Module({
  imports: [TypeOrmModule.forFeature([
    Abit,
    INN,
    Pasport,
    SNILS,
    Med,
    MVD,
    P_O,
    ZGT,
    Info,
    Kazak,
    VK,
    VS,
    Marks,
    Obrazov,
    Tek_Obr,
    Mother,
    Father,
    Family,
    L_Num,
    LD,
    Zachisl,
    Dop,
    EGE,
    Ph_P,
    Spec,
    Vst_Isp,
  ])],
  providers: [AbitService],
  controllers: [AbitsController]
})
export class AbitsModule {}
