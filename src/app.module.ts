import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tel } from './typeorm/entities/Tel';
import { Pasport } from './typeorm/entities/Pasort';
import { Abit } from './typeorm/entities/Abit';
import { AbitsModule } from './abits/abits.module';
import { Mother } from './typeorm/entities/Mother';
import { Father } from './typeorm/entities/Father';

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
      Mother,
      Father,
    ],
    synchronize: true,
    dropSchema: true,
  }), AbitsModule, AbitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
