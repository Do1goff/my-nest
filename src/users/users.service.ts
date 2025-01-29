// src/users/users.service.ts

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { UserDto } from './dto/UserDto.dto'
import { User } from './entity/users.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username: username } })
  }

  find(options?: FindManyOptions<User>): Promise<User[]> {
    return this.userRepository.find(options)
  }
  findOne(options: FindOneOptions<User>): Promise<User> {
    return this.userRepository.findOne(options)
  }

  update(
    criteria: FindOptionsWhere<User>,
    partialEntity: QueryDeepPartialEntity<User>,
  ) {
    return this.userRepository.update(criteria, partialEntity)
  }

  async create(data: UserDto): Promise<User> {
    const reasons = this.userRepository.create(data)
    return this.userRepository.save(reasons)
  }
}
