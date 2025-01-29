import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'militaryUnits' })
export class MilitaryUnitsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  address: string

  @Column({ nullable: true })
  mail: string

  // @ManyToOne(() => CitiesEntity, (location) => location.id)
  // address?: CitiesEntity;

  @OneToMany(() => AbitEntity, (abit) => abit.militaryService_unit)
  abit?: AbitEntity
}
