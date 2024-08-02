import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MilitaryPlacesEntity } from '../militaryService/entity/militaryPlaces.entity'
import { MilitaryRanksEntity } from '../militaryService/entity/militaryRanks.entity'
import { MilitarySVOEntity } from '../militaryService/entity/militarySVO.entity'
import { MilitaryPlacesController } from '../militaryService/militaryPlaces.controller'
import { MilitaryPlacesService } from '../militaryService/militaryPlaces.service'
import { MilitaryRanksController } from '../militaryService/militaryRanks.controller'
import { MilitaryRanksService } from '../militaryService/militaryRanks.service'
import { MilitarySVOController } from '../militaryService/militarySVO.controller'
import { MilitarySVOService } from '../militaryService/militarySVO.service'
import { AbitsController } from './abits.controller'
import { AbitService } from './abits.service'
import { CossackSocietyController } from './cossackSociety.controller'
import { CossackSocietyService } from './cossackSociety.service'
import { AbitEntity } from './entity/abit.entity'
import { CossackSocietyEntity } from './entity/cossackSociety.entity'
import { EstablishedQuotaEntity } from './entity/establishedQuota.entity'
import { FamilySocialStatusEntity } from './entity/familySocialStatus.entity'
import { MilitaryInstituteEntity } from './entity/militaryInstitute.entity'
import { NationalityEntity } from './entity/nationality.entity'
import { PriorityRightEntity } from './entity/priorityRight.entity'
import { SeparateQuotaEntity } from './entity/separateQuota.entity'
import { SpecialtyEntity } from './entity/specialties.entity'
import { SubjectsEntity } from './entity/subjects.entity'
import { EstablishedQuotaController } from './establishedQuota.controller'
import { EstablishedQuotaService } from './establishedQuota.service'
import { FamilySocialStatusController } from './familySocialStatus.controller'
import { FamilySocialStatusService } from './familySocialStatus.service'
import { MilitaryInstituteController } from './militaryInstitute.controller'
import { MilitaryInstituteService } from './militaryInstitute.service'
import { AbitNationalityController } from './nationality.controller'
import { AbitNationalityService } from './nationality.service'
import { PriorityRightController } from './priorityRight.controller'
import { PriorityRightService } from './priorityRight.service'
import { SeparateQuotaController } from './separateQuota.controller'
import { SeparateQuotaService } from './separateQuota.service'
import { AbitSpecialtyController } from './specialty.controller'
import { AbitSpecialtyService } from './specialty.service'
import { SubjectController } from './subjects.controller'
import { SubjectsService } from './subjects.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AbitEntity,
      NationalityEntity,
      EstablishedQuotaEntity,
      SeparateQuotaEntity,
      PriorityRightEntity,
      SpecialtyEntity,
      CossackSocietyEntity,
      SubjectsEntity,
      FamilySocialStatusEntity,
      MilitaryInstituteEntity,
      MilitaryRanksEntity,
      MilitaryPlacesEntity,
      MilitarySVOEntity
    ]),
    AbitsModule,
  ],

  providers: [
    AbitService,
    AbitNationalityService,
    EstablishedQuotaService,
    SeparateQuotaService,
    PriorityRightService,
    AbitSpecialtyService,
    CossackSocietyService,
    SubjectsService,
    FamilySocialStatusService,
    MilitaryInstituteService,
    MilitaryRanksService,
    MilitaryPlacesService,
    MilitarySVOService
  ],
  controllers: [
    AbitsController,
    AbitNationalityController,
    EstablishedQuotaController,
    SeparateQuotaController,
    PriorityRightController,
    AbitSpecialtyController,
    CossackSocietyController,
    SubjectController,
    FamilySocialStatusController,
    MilitaryInstituteController,
    MilitaryRanksController,
    MilitaryPlacesController,
    MilitarySVOController
  ],
})
export class AbitsModule {}
