import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'establishedQuota' })
export class EstablishedQuotaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];
}
