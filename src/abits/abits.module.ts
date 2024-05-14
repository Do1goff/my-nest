import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CossackSocietyController } from './abit-cossackSociety.controller'
import { CossackSocietyService } from './abit-cossackSociety.service'
import { AbitNationalityController } from './abit-nationality.controller'
import { AbitNationalityService } from './abit-nationality.service'
import { AbitSpecialtyController } from './abit-specialty.controller'
import { AbitSpecialtyService } from './abit-specialty.service'
import { AbitsController } from './abits.controller'
import { AbitService } from './abits.service'
import { AbitEntity } from './entity/abit.entity'
import { CossackSocietyEntity } from './entity/cossackSociety.entity'
import { NationalityEntity } from './entity/nationality.entity'
import { PriorityRightEntity } from './entity/priorityRight.entity'
import { QuotaEntity } from './entity/quota.entity'
import { SpecialtyEntity } from './entity/specialties.entity'
import { SubjectsEntity } from './entity/subjects.entity'
import { PriorityRightController } from './priorityRight.controller'
import { PriorityRightService } from './priorityRight.service'
import { QuotaController } from './quota.controller'
import { QuotaService } from './quota.service'
import { SubjectController } from './subjects.controller'
import { SubjectsService } from './subjects.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AbitEntity,
      NationalityEntity,
      QuotaEntity,
      PriorityRightEntity,
      SpecialtyEntity,
      CossackSocietyEntity,
      SubjectsEntity,
    ]),
    AbitsModule,
  ],

  providers: [
    AbitService,
    AbitNationalityService,
    QuotaService,
    PriorityRightService,
    AbitSpecialtyService,
    CossackSocietyService,
    SubjectsService,
  ],
  controllers: [
    AbitsController,
    AbitNationalityController,
    QuotaController,
    PriorityRightController,
    AbitSpecialtyController,
    CossackSocietyController,
    SubjectController,
  ],
})
export class AbitsModule {}
