import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { UserDto } from './dto/UserDto.dto'
import { User } from './entity/users.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async get() {
    return await this.usersService.find({})
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findOne({
      where: {
        id: id,
      },
    })
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UserDto,
  ) {
    return await this.usersService.update(
      {
        id: id,
      },
      updateData,
    )
  }

  @Post()
  async create(@Body() data: UserDto): Promise<User> {
    return this.usersService.create(data)
  }
}
