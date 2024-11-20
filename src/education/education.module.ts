import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryEducationController } from './categoryEducation.controller'
import { CategoryEducationService } from './categoryEducation.service'
import { CategoryUncanceledEducationController } from './categoryUncanceledEducation.controller'
import { CategoryUncanceledEducationService } from './categoryUncanceledEducation.service'
import { CategoryEducationEntity } from './entity/categoryEducation.entity'
import { CategoryUncanceledEducationEntity } from './entity/categoryUncanceledEducation.entity'

@Module({
  imports: [TypeOrmModule.forFeature([
    CategoryEducationEntity,
    CategoryUncanceledEducationEntity
  ]), EducationModule],

  providers: [
    CategoryEducationService,
    CategoryUncanceledEducationService
  ],

  controllers: [
    CategoryEducationController,
    CategoryUncanceledEducationController
  ],
})
export class EducationModule {}
