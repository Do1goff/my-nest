import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'establishedQuota' })
export class EstablishedQuotaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  text: string

  @Column({ nullable: true })
  code: string

  @OneToMany(() => AbitEntity, (abit) => abit.establishedQuota)
  abit?: AbitEntity[]
}
