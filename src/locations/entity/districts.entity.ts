import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CitiesEntity } from './cities.entity'
import { RegionsEntity } from './regions.entity'
import { StatusesLocationsEntity } from './statusesLocations.entity'

@Entity({ name: 'districts' })
export class DistrictsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string
  
  @ManyToOne(() => StatusesLocationsEntity, (status) => status.district)
  status?: StatusesLocationsEntity;
  
  @Column()
  statusInEnd:boolean
  
  @OneToMany(() => CitiesEntity, (city) => city.district)
  cities: CitiesEntity[]
  
  @ManyToOne(() => RegionsEntity, (region) => region.districts)
  region: RegionsEntity;

}
