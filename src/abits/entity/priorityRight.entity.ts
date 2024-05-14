import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'priorityRight' })
export class PriorityRightEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];
}
