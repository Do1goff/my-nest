import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DistrictsEntity } from './districts.entity'
import { LocationsEntity } from './locations.entity'
import { StatusesLocationsEntity } from './statusesLocations.entity'

@Entity({ name: 'cities' }) 
export class CitiesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => DistrictsEntity, (district) => district.cities)
  district?: DistrictsEntity;

  @Column()
  name:string;

  @ManyToOne(() => StatusesLocationsEntity, (status) => status.id)
  status?: StatusesLocationsEntity;
  
  @OneToMany(() => LocationsEntity, (location) => location.cityId)
  location?: LocationsEntity;
}
