// src/auth/auth.module.ts

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { LogEntity } from './entity/log.entity'
import { LogService } from './log.service'

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity]), UsersModule],
  providers: [LogService],
  controllers: [AuthController],
})
export class AuthModule {}
