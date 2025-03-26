import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('log')
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ip: string

  @Column()
  username: string

  @CreateDateColumn()
  createdAt: Date
}
