import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AbitService } from 'src/abits/abits.service'
import { AbitEntity } from 'src/abits/entity/abit.entity'
import { FilterEntity } from './entity/filter.entity'
import { FilterController } from './filter.controller'
import { FilterService } from './filter.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AbitEntity,
      FilterEntity
    ]),
    FilterModule,
  ],

  providers: [
    FilterService,
    AbitService
  ],
  controllers: [
    FilterController,
  ],
})
export class FilterModule {}
