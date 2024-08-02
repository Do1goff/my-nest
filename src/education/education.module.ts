import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryEducationController } from './categoryEducation.controller'
import { CategoryEducationService } from './categoryEducation.service'
import { CategoryUncanceledEducationController } from './categoryUncanceledEducation.controller'
import { CategoryUncanceledEducationService } from './categoryUncanceledEducation.service'
import { EducationController } from './education.controller'
import { EducationService } from './education.service'
import { CategoryEducationEntity } from './entity/categoryEducation.entity'
import { CategoryUncanceledEducationEntity } from './entity/categoryUncanceledEducation.entity'
import { EducationEntity } from './entity/education.entity'
import { UncanceledEducationEntity } from './entity/uncanceledEducation.entity'
import { UncanceledEducationController } from './uncanceledEducation.controller'
import { UncanceledEducationService } from './uncanceledEducation.service'

@Module({
  imports: [TypeOrmModule.forFeature([
    EducationEntity,
    UncanceledEducationEntity,
    CategoryEducationEntity,
    CategoryUncanceledEducationEntity
  ]), EducationModule],

  providers: [
    EducationService,
    UncanceledEducationService,
    CategoryEducationService,
    CategoryUncanceledEducationService
  ],

  controllers: [
    EducationController,
    UncanceledEducationController,
    CategoryEducationController,
    CategoryUncanceledEducationController
  ],
})
export class EducationModule {}
