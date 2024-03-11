import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommissionController } from './commission.controller'
import { CommissionService } from './commission.service'
import { CommissionEntity } from './entity/commission.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CommissionEntity]), CommissionModule],

  providers: [CommissionService],
  controllers: [CommissionController],
})
export class CommissionModule {}
