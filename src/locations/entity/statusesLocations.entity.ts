import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CitiesEntity } from './cities.entity'
import { DistrictsEntity } from './districts.entity'
import { RegionsEntity } from './regions.entity'

@Entity({ name: 'statusesLocations' })
export class StatusesLocationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @OneToMany(() => RegionsEntity, (region) => region.id)
  region?: RegionsEntity;
  
  @OneToMany(() => DistrictsEntity, (district) => district.id)
  district?: DistrictsEntity;
  
  @OneToMany(() => CitiesEntity, (city) => city.id)
  city?: CitiesEntity;
}
