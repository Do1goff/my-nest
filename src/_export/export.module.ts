import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AbitService } from 'src/abits/abits.service'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import { SubjectsEntity } from 'src/abits/entity/subjects.entity'
import { ExportController } from './export.controller'
import { ExportService } from './export.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AbitEntity,
      SubjectsEntity
    ]),
    ExportModule,
  ],

  providers: [
    ExportService,
    AbitService
  ],
  controllers: [
    ExportController,
  ],
})
export class ExportModule {}
