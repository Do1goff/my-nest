import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MilitaryPlacesEntity } from './entity/militaryPlaces.entity'
import { MilitaryRanksEntity } from './entity/militaryRanks.entity'
import { MilitarySVOEntity } from './entity/militarySVO.entity'
import { MilitaryUnitsEntity } from './entity/militaryUnits.entity'
import { MilitaryPlacesController } from './militaryPlaces.controller'
import { MilitaryPlacesService } from './militaryPlaces.service'
import { MilitaryRanksController } from './militaryRanks.controller'
import { MilitaryRanksService } from './militaryRanks.service'
import { MilitarySVOController } from './militarySVO.controller'
import { MilitarySVOService } from './militarySVO.service'
import { MilitaryUnitsController } from './militaryUnits.controller'
import { MilitaryUnitsService } from './militaryUnits.service'

@Module({
  imports: [TypeOrmModule.forFeature([
    MilitaryPlacesEntity,
    MilitaryRanksEntity,
    MilitarySVOEntity,
    MilitaryUnitsEntity
  ]), MilitaryServiceModule],

  providers: [
    MilitaryPlacesService,
    MilitaryRanksService,
    MilitarySVOService,
    MilitaryUnitsService
  ],

  controllers: [
    MilitaryPlacesController,
    MilitaryRanksController,
    MilitarySVOController,
    MilitaryUnitsController
  ],
})
export class MilitaryServiceModule {}
