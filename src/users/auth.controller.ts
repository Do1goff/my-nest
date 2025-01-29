// src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from '../users/users.service'
// import { AuthService } from './auth.service'
import { UserDto } from './dto/UserDto.dto'
import { User } from './entity/users.entity'

@Controller()
export class AuthController {
  constructor(
    // private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body: UserDto): Promise<User | null> {
    const user = await this.usersService.findByUsername(body.username)
    if (user && user.password == body.password) {
      return user
    }
    return null
  }
}
