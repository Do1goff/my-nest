import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from '../../abits/entity/abit.entity'

@Entity({ name: 'militaryPlaces' })
export class MilitaryPlacesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  abbreviation: string;

  @OneToMany(() => AbitEntity, (abit) => abit.militaryService_place)
  abit?: AbitEntity[];
}
 