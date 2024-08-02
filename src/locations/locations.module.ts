import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CitiesController } from './cities.controller'
import { CitiesService } from './cities.service'
import { DistrictsController } from './districts.controller'
import { DistrictsService } from './districts.service'
import { CitiesEntity } from './entity/cities.entity'
import { DistrictsEntity } from './entity/districts.entity'
import { LocationsEntity } from './entity/locations.entity'
import { MilitaryDistrictsEntity } from './entity/militaryDistricts.entity'
import { RegionsEntity } from './entity/regions.entity'
import { StatusesLocationsEntity } from './entity/statusesLocations.entity'
import { LocationsController } from './locations.controller'
import { LocationsService } from './locations.service'
import { MilitaryDistrictsController } from './militaryDistricts.controller'
import { MilitaryDistrictsService } from './militaryDistricts.service'
import { RegionsController } from './regions.controller'
import { RegionsService } from './regions.service'
import { StatusesLocationsController } from './statusesLocations.controller'
import { StatusesLocationsService } from './statusesLocations.service'

@Module({
  imports: [TypeOrmModule.forFeature([LocationsEntity, StatusesLocationsEntity, RegionsEntity, DistrictsEntity, CitiesEntity, MilitaryDistrictsEntity]), LocationsModule],

  providers: [LocationsService, StatusesLocationsService, RegionsService, DistrictsService, CitiesService, MilitaryDistrictsService],
  controllers: [LocationsController, StatusesLocationsController, RegionsController, DistrictsController, CitiesController, MilitaryDistrictsController],
})
export class LocationsModule {}
