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

  @Column({nullable:true})
  egeSubject_1: string;

  @Column({nullable:true})
  egeSubject_2: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];
}
