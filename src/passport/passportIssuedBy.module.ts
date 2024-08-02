import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportIssuedByEntity } from './entity/passportIssuedBy.entity'
import { PassportIssuedByController } from './passportIssuedBy.controller'
import { PassportIssuedByService } from './passportIssuedBy.service'

@Module({
  imports: [TypeOrmModule.forFeature([PassportIssuedByEntity]), PassportIssuedByModule],

  providers: [PassportIssuedByService],
  controllers: [PassportIssuedByController],
})
export class PassportIssuedByModule {}
