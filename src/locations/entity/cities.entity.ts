import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DistrictsEntity } from './districts.entity'
import { RegionsEntity } from './regions.entity'
import { StatusesLocationsEntity } from './statusesLocations.entity'

@Entity({ name: 'cities' }) 
export class CitiesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name:string;

  @ManyToOne(() => StatusesLocationsEntity, (status) => status.city)
  status?: StatusesLocationsEntity;
  
  @ManyToOne(() => DistrictsEntity, (district) => district.cities)
  district?: DistrictsEntity;
  
  @ManyToOne(() => RegionsEntity, (region) => region.cities)
  region: RegionsEntity;

  @OneToMany(() => AbitEntity, (abit) => abit.residence)
  abit?: AbitEntity;
  
}
