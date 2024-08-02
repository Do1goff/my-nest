import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DistrictsEntity } from './districts.entity'
import { LocationsEntity } from './locations.entity'
import { MilitaryDistrictsEntity } from './militaryDistricts.entity'
import { StatusesLocationsEntity } from './statusesLocations.entity'

@Entity({ name: 'regions' })
export class RegionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string
  
  @Column({nullable:true})
  region:string
  
  @Column()
  countryRussia:boolean 
  
  @ManyToOne(() => StatusesLocationsEntity, (status) => status.id)
  status?: StatusesLocationsEntity;
  
  @OneToMany(() => DistrictsEntity, (district) => district.region)
  districts: DistrictsEntity[]
  
  @OneToMany(() => LocationsEntity, (location) => location.regionId)
  location?: LocationsEntity;
  
  @ManyToOne(() => MilitaryDistrictsEntity, (militaryDistrict) => militaryDistrict.id)
  militaryDistrict?: MilitaryDistrictsEntity;
}
