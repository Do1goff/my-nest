import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MilitaryCommissariatsEntity } from './entity/militaryCommissariats.entity'
import { MilitaryCommissariatController } from './militaryCommissariat.controller'
import { MilitaryCommissariatService } from './militaryCommissariat.service'

@Module({
  imports: [TypeOrmModule.forFeature([MilitaryCommissariatsEntity])],
  controllers: [MilitaryCommissariatController],
  providers: [MilitaryCommissariatService],
})
export class MilitaryCommissariatModule {}
