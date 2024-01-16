import { Module } from '@nestjs/common';
import { AbitService } from './services/services.service';
import { AbitsController} from './controllers/controllers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abit } from 'src/typeorm/entities/Abit';
import { Tel } from 'src/typeorm/entities/Tel';
import { Pasport } from 'src/typeorm/entities/Pasort';
import { Mother } from 'src/typeorm/entities/Mother';
import { Father } from 'src/typeorm/entities/Father';

@Module({
  imports: [TypeOrmModule.forFeature([
    Abit, 
    Tel, 
    Pasport,
    Father,
    Mother,
  ])],
  providers: [AbitService],
  controllers: [AbitsController]
})
export class AbitsModule {}
