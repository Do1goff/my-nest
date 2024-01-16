import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tel } from './typeorm/entities/Tel';
import { Pasport } from './typeorm/entities/Pasort';
import { Abit } from './typeorm/entities/Abit';
import { AbitsModule } from './abits/abits.module';
import { Parent } from './typeorm/entities/Parent';
import { Mother } from './typeorm/entities/Mother';
import { Papa } from './typeorm/entities/Papa';

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
      Tel, 
      Pasport,
      Parent,
      Mother,
      Papa,
    ],
    synchronize: true,
    dropSchema: true,
  }), AbitsModule, AbitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
