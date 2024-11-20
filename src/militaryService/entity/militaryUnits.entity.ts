import { AbitEntity } from 'src/abits/entity/abit.entity'
import { LocationsEntity } from 'src/locations/entity/locations.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'militaryUnits' })
export class MilitaryUnitsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => LocationsEntity, (location) => location.id)
  address?: LocationsEntity;

  @OneToMany(() => AbitEntity, (abit) => abit.militaryService_unit)
  abit?: AbitEntity;
}
