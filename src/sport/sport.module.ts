import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SportEntity } from 'src/sport/entity/sport.entity'
import { ExercisesEntity } from './entity/exercises.entity'
import { ExerciseController } from './exercises.controller'
import { ExercisesService } from './exercises.service'
import { SportController } from './sport.controller'
import { SportService } from './sport.service'

@Module({
  imports: [TypeOrmModule.forFeature([SportEntity, ExercisesEntity])],
  controllers: [SportController, ExerciseController],
  providers: [SportService, ExercisesService],
})
export class SportModule {}
