import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { CitiesEntity } from './cities.entity'
import { DistrictsEntity } from './districts.entity'
import { MilitaryDistrictsEntity } from './militaryDistricts.entity'
import { StatusesLocationsEntity } from './statusesLocations.entity'

@Entity({ name: 'regions' })
export class RegionsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => StatusesLocationsEntity, (status) => status.region)
  status?: StatusesLocationsEntity

  @Column()
  statusInEnd: boolean

  @Column({ nullable: true })
  region: string

  @ManyToOne(
    () => MilitaryDistrictsEntity,
    (militaryDistrict) => militaryDistrict.region,
  )
  militaryDistrict?: MilitaryDistrictsEntity

  @Column()
  countryRussia: boolean

  @Column({ nullable: true })
  date_admission: Date

  @OneToMany(() => DistrictsEntity, (district) => district.region)
  districts: DistrictsEntity[]

  @OneToMany(() => CitiesEntity, (city) => city.region)
  cities: CitiesEntity[]
}
