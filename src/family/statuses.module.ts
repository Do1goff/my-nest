import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StatusesEntity } from './entity/statuses.entity'
import { StatusesController } from './statuses.controller'
import { StatusesService } from './statuses.service'

@Module({
  imports: [TypeOrmModule.forFeature([StatusesEntity]), StatusesModule],

  providers: [StatusesService],
  controllers: [StatusesController],
})
export class StatusesModule {}
