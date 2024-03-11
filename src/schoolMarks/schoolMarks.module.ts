import { Module } from '@nestjs/common';
import { SchoolMarksController } from './schoolMarks.controller';
import { SchoolMarksService } from './schoolMarks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolMarksEntity } from './entity/schoolMarks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    SchoolMarksEntity,
    
  ])],
  controllers: [SchoolMarksController],
  providers: [SchoolMarksService]
})
export class SchoolMarksModule {}
