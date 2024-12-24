import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AbitService } from 'src/abits/abits.service'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import { RegionsEntity } from 'src/locations/entity/regions.entity'
import { RegionsService } from 'src/locations/regions.service'
import { FilterEntity } from './entity/filter.entity'
import { FilterController } from './filter.controller'
import { FilterService } from './filter.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AbitEntity,
      RegionsEntity,
      FilterEntity
    ]),
    FilterModule,
  ],

  providers: [
    FilterService,
    RegionsService,
    AbitService
  ],
  controllers: [
    FilterController,
  ],
})
export class FilterModule {}
