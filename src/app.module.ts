import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasport } from './typeorm/entities/Docs/Pasport';
import { Abit } from './typeorm/entities/Abit';
import { AbitsModule } from './abits/abits.module';
import { Mother } from './typeorm/entities/Parent/Mother';
import { Father } from './typeorm/entities/Parent/Father';
import { INN } from './typeorm/entities/Docs/INN';
import { SNILS } from './typeorm/entities/Docs/SNILS';
import { Med } from './typeorm/entities/Godn/Med';
import { MVD } from './typeorm/entities/Godn/MVD';
import { P_O } from './typeorm/entities/Godn/PO';
import { ZGT } from './typeorm/entities/Godn/ZGT';
import { Info } from './typeorm/entities/Info/Info';
import { Kazak } from './typeorm/entities/Info/Kazak';
import { VK } from './typeorm/entities/Info/VK';
import { Marks } from './typeorm/entities/Obrazov/Marks';
import { Obrazov } from './typeorm/entities/Obrazov/Obrazov';
import { L_Num } from './typeorm/entities/Personal/L_Num';
import { LD } from './typeorm/entities/Personal/LD';
import { Dop } from './typeorm/entities/Rating/Dop';
import { EGE } from './typeorm/entities/Rating/EGE';
import { Ph_P } from './typeorm/entities/Rating/Ph_P';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'12345',
    database:'my-sql',
    entities:[ 
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
      Marks,
      Obrazov,
      Mother,
      Father,
      L_Num,
      LD,
      Dop,
      EGE,
      Ph_P
    ],
    synchronize: true,
    dropSchema: true,
  }), AbitsModule, AbitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
