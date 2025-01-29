import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'priorityRight' })
export class PriorityRightEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  text: string

  @OneToMany(() => AbitEntity, (abit) => abit.priorityRight)
  abit?: AbitEntity[]
}
