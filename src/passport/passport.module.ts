import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportEntity } from './entity/passport.entity'
import { PassportController } from './passport.controller'
import { PassportService } from './passport.service'

@Module({
  imports: [TypeOrmModule.forFeature([
    PassportEntity,
  ]), PassportModule],

  providers: [
    PassportService,
  ],

  controllers: [
    PassportController,
  ],
})
export class PassportModule {}
