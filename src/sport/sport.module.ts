import { Module } from '@nestjs/common';
import { SportController } from './sport.controller';
import { SportService } from './sport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportEntity } from 'src/sport/entity/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    SportEntity
  ])],
  controllers: [SportController],
  providers: [SportService]
})
export class SportModule {}
