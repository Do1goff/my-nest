import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MilitaryPlacesEntity } from './entity/militaryPlaces.entity'
import { MilitaryRanksEntity } from './entity/militaryRanks.entity'
import { MilitarySVOEntity } from './entity/militarySVO.entity'
import { MilitaryServiceEntity } from './entity/militaryService.entity'
import { MilitaryUnitsEntity } from './entity/militaryUnits.entity'
import { MilitaryPlacesController } from './militaryPlaces.controller'
import { MilitaryPlacesService } from './militaryPlaces.service'
import { MilitaryRanksController } from './militaryRanks.controller'
import { MilitaryRanksService } from './militaryRanks.service'
import { MilitarySVOController } from './militarySVO.controller'
import { MilitarySVOService } from './militarySVO.service'
import { MilitaryServiceController } from './militaryService.controller'
import { MilitaryServiceService } from './militaryService.service'
import { MilitaryUnitsController } from './militaryUnits.controller'
import { MilitaryUnitsService } from './militaryUnits.service'

@Module({
  imports: [TypeOrmModule.forFeature([
    MilitaryServiceEntity,
    MilitaryPlacesEntity,
    MilitaryRanksEntity,
    MilitarySVOEntity,
    MilitaryUnitsEntity
  ]), MilitaryServiceModule],

  providers: [
    MilitaryServiceService,
    MilitaryPlacesService,
    MilitaryRanksService,
    MilitarySVOService,
    MilitaryUnitsService
  ],

  controllers: [
    MilitaryServiceController,
    MilitaryPlacesController,
    MilitaryRanksController,
    MilitarySVOController,
    MilitaryUnitsController
  ],
})
export class MilitaryServiceModule {}
