import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExaminationGroupEntity } from './entity/examinationGroup.entity'
import { ExaminationGroupController } from './examinationGroup.controller'
import { ExaminationGroupService } from './examinationGroup.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ExaminationGroupEntity]),
    ExaminationGroupModule,
  ],

  providers: [ExaminationGroupService],
  controllers: [ExaminationGroupController],
})
export class ExaminationGroupModule {}
