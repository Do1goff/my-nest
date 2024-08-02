import { LocationsEntity } from 'src/locations/entity/locations.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MilitaryServiceEntity } from './militaryService.entity'

@Entity({ name: 'militaryUnits' })
export class MilitaryUnitsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column()
  // address: string; 
  @ManyToOne(() => LocationsEntity, (location) => location.id)
  address?: LocationsEntity;

  @OneToMany(() => MilitaryServiceEntity, (militaryService) => militaryService.id)
  militaryService?: MilitaryServiceEntity;
}
