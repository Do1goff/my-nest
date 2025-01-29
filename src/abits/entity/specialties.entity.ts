import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'specialty' })
export class SpecialtyEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  name_civil: string

  @Column()
  abbreviation: string

  @Column()
  faculty: string

  @Column({ nullable: true })
  recruitment: number

  @Column({ nullable: true })
  egeSubject_1: string

  @Column({ nullable: true })
  egeSubject_2: string

  @Column({ nullable: true })
  egeSubject_3: string

  @Column({ nullable: true })
  egeSubject_4: string

  @OneToMany(() => AbitEntity, (abit) => abit.specialty_1)
  abit?: AbitEntity[]
  @OneToMany(() => AbitEntity, (abit) => abit.specialty_military_commissariat)
  abit_MC?: AbitEntity[]
}
