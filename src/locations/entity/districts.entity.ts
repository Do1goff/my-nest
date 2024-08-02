import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CitiesEntity } from './cities.entity'
import { LocationsEntity } from './locations.entity'
import { RegionsEntity } from './regions.entity'
import { StatusesLocationsEntity } from './statusesLocations.entity'

@Entity({ name: 'districts' })
export class DistrictsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RegionsEntity, (region) => region.districts)
  region?: RegionsEntity;

  @Column()
  name: string
  
  @OneToMany(() => CitiesEntity, (city) => city.district)
  cities: CitiesEntity[]
  
  @ManyToOne(() => StatusesLocationsEntity, (status) => status.id)
  status?: StatusesLocationsEntity;
  
  @OneToMany(() => LocationsEntity, (location) => location.districtId)
  location?: LocationsEntity;
}
