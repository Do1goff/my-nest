import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AbitService } from 'src/abits/abits.service'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import { SubjectsEntity } from 'src/abits/entity/subjects.entity'
import { RegionsEntity } from 'src/locations/entity/regions.entity'
import { RegionsService } from 'src/locations/regions.service'
import { ExportController } from './export.controller'
import { ExportService } from './export.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AbitEntity,
      RegionsEntity,
      SubjectsEntity
    ]),
    ExportModule,
  ],

  providers: [
    ExportService,
    AbitService,
    RegionsService
  ],
  controllers: [
    ExportController,
  ],
})
export class ExportModule {}
