import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FamilyEntity } from './entity/family.entity'
import { FamilyController } from './family.controller'
import { FamilyService } from './family.service'

@Module({
  imports: [TypeOrmModule.forFeature([FamilyEntity]), FamilyModule],
  providers: [FamilyService],
  controllers: [FamilyController],
})
export class FamilyModule {}
