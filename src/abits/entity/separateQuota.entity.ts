import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'separateQuota' })
export class SeparateQuotaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  text: string

  @Column({ nullable: true })
  code: string

  @Column({ default: false })
  withoutEGE: boolean

  @OneToMany(() => AbitEntity, (abit) => abit.separateQuota)
  abit?: AbitEntity[]
}
