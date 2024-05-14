import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TelephoneEntity } from './entity/telephone.entity'
import { TelephoneController } from './telephone.controller'
import { TelephoneService } from './telephone.service'

@Module({
  imports: [TypeOrmModule.forFeature([TelephoneEntity]), TelephoneModule],
  providers: [TelephoneService],
  controllers: [TelephoneController],
})
export class TelephoneModule {}
