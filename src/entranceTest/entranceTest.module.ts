import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity'
import { FormEntranceTestEntity } from './entity/formEntranceTest.entity'
import { EntranceTestController } from './entranceTest.controller'
import { EntranceTestService } from './entranceTest.service'
import { FormsEntranceTestController } from './formsEntranceTest.controller'
import { FormsEntranceTestService } from './formsEntranceTest.service'

@Module({
  imports: [TypeOrmModule.forFeature([
    EntranceTestEntity,
    FormEntranceTestEntity
  ])],
  controllers: [EntranceTestController, FormsEntranceTestController],
  providers: [EntranceTestService, FormsEntranceTestService]
})
export class EntranceTestModule {}
