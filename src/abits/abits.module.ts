import { Module } from '@nestjs/common';
import { AbitService } from './services/services.service';
import { AbitsController} from './controllers/controllers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abit } from 'src/typeorm/entities/Abit';
import { Tel } from 'src/typeorm/entities/Tel';
import { Pasport } from 'src/typeorm/entities/Pasort';
import { Parent } from 'src/typeorm/entities/Parent';
import { Mother } from 'src/typeorm/entities/Mother';
import { Papa } from 'src/typeorm/entities/Papa';

@Module({
  imports: [TypeOrmModule.forFeature([
    Abit, 
    Tel, 
    Pasport,
    Parent,
    Mother,
    Papa,
  ])],
  providers: [AbitService],
  controllers: [AbitsController]
})
export class AbitsModule {}
