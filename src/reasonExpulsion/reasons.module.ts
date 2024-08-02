import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReasonsEntity } from './entity/reasons.entity'
import { ReasonsController } from './reasons.controller'
import { ReasonsService } from './reasons.service'

@Module({
  imports: [TypeOrmModule.forFeature([ReasonsEntity]), ReasonsModule],

  providers: [ReasonsService],
  controllers: [ReasonsController],
})
export class ReasonsModule {}
