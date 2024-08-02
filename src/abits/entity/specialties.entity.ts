import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'specialty' })
export class SpecialtyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  name_civil: string;

  @Column()
  abbreviation: string;

  @Column()
  faculty: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];
}
