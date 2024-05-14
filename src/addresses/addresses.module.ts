import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressesController } from './addresses.controller'
import { AddressesService } from './addresses.service'
import { AddressesEntity } from './entity/addresses.entity'

@Module({
  imports: [TypeOrmModule.forFeature([AddressesEntity]), AddressesModule],

  providers: [AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
