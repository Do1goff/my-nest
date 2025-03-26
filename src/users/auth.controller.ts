// src/auth/auth.controller.ts

import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { UsersService } from '../users/users.service'
import { UserDto } from './dto/UserDto.dto'
import { User } from './entity/users.entity'
import { LogService } from './log.service'

@Controller()
export class AuthController {
  constructor(
    private usersService: UsersService,
    private logService: LogService,
  ) {}

  @Post('login')
  async login(
    @Body() body: UserDto,
    @Req() req: Request,
  ): Promise<User | null> {
    const user = await this.usersService.findByUsername(body.username)
    if (user && user.password == body.password) {
      const forwardedIps =
        req.headers['x-real-ip'] || req.connection.remoteAddress
      await this.logService.logIp(forwardedIps, body.username)
      return user
    }
    return null
  }

  @Get('login')
  async log(@Req() req: Request) {
    return req.headers
  }
}
