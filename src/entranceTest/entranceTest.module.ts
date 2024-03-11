import { Module } from '@nestjs/common';
import { EntranceTestController } from './entranceTest.controller';
import { EntranceTestService } from './entranceTest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntranceTestEntity } from 'src/entranceTest/entity/entranceTest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    EntranceTestEntity
  ])],
  controllers: [EntranceTestController],
  providers: [EntranceTestService]
})
export class EntranceTestModule {}
