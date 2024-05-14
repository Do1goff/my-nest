import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EgeMarksController } from './egeMarks.controller'
import { EgeMarksService } from './egeMarks.service'
import { EgeMarksEntity } from './entity/egeMarks.entity'

@Module({
  imports: [TypeOrmModule.forFeature([EgeMarksEntity])],
  controllers: [EgeMarksController],
  providers: [EgeMarksService],
})
export class EgeMarksModule {}
