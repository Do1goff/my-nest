// src/log/log.service.ts

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LogEntity } from './entity/log.entity'

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity) private logRepository: Repository<LogEntity>,
  ) {}

  async logIp(ip: any, username: string): Promise<void> {
    const log = this.logRepository.create({ ip, username })
    await this.logRepository.save(log)
  }
}
