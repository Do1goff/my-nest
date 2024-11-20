import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from '../../abits/entity/abit.entity'

@Entity({ name: 'militarySVO' })
export class MilitarySVOEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AbitEntity, (abit) => abit.militaryService_SVO)
  abit?: AbitEntity[];
}
