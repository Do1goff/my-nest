import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from '../../abits/entity/abit.entity'

@Entity({ name: 'militaryRanks' })
export class MilitaryRanksEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  genitive: string

  @OneToMany(() => AbitEntity, (abit) => abit.militaryService_rank)
  abit?: AbitEntity[]
}
