import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InstitutesEntity } from './entity/institutes.entity'
import { InstitutesController } from './institutes.controller'
import { InstitutesService } from './institutes.service'

@Module({
  imports: [TypeOrmModule.forFeature([InstitutesEntity]), InstitutesModule],

  providers: [InstitutesService],
  controllers: [InstitutesController],
})
export class InstitutesModule {}
