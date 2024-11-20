import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { History } from './entity/history.entity'
import { HistoryController } from './history.controller'
import { HistoryService } from './history.service'

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [HistoryService],
  controllers: [HistoryController],
})
export class HistoryModule {}