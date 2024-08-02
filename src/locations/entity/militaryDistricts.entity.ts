import { MilitaryCommissariatsEntity } from 'src/militaryCommissariat/entity/militaryCommissariats.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { RegionsEntity } from './regions.entity'

@Entity({ name: 'militaryDistricts' })
export class MilitaryDistrictsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  abbreviation: string;
  
  @OneToMany(() => RegionsEntity, (region) => region.id)
  region?: RegionsEntity;

  @OneToMany(() => MilitaryCommissariatsEntity, (militaryCommissariat) => militaryCommissariat.id)
  militaryCommissariat?: MilitaryCommissariatsEntity;

}
