import { AbitEntity } from 'src/abits/entity/abit.entity'
import { InstitutesEntity } from 'src/instituts/entity/institutes.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CitiesEntity } from './cities.entity'
import { DistrictsEntity } from './districts.entity'
import { RegionsEntity } from './regions.entity'

@Entity({ name: 'locations' })
export class LocationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  regionId: number;
  
  @Column()
  districtId: number;
  
  @Column({nullable:true})
  cityId: number;
  
  @ManyToOne(() => RegionsEntity, (region) => region.id)
  region?: RegionsEntity;

  @ManyToOne(() => DistrictsEntity, (district) => district.id)
  district?: DistrictsEntity;

  @ManyToOne(() => CitiesEntity, (city) => city.id)
  city?: CitiesEntity;
  
  @OneToMany(() => AbitEntity, (abit) => abit.residence)
  abit?: AbitEntity;
  
  @OneToMany(() => InstitutesEntity, (institute) => institute.address)
  institute?: InstitutesEntity;
}
