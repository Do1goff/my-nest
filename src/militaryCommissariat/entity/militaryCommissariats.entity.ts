import { AbitEntity } from 'src/abits/entity/abit.entity'
import { MilitaryDistrictsEntity } from 'src/locations/entity/militaryDistricts.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'military_commissariats' })
export class MilitaryCommissariatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: number;

  @Column()
  type: string;

  @Column()
  municipal: boolean;

  @Column()
  category: number;

  @Column()
  name: string;

  @Column()
  name_official: string;

  @Column()
  region: string;
 
  @ManyToOne(() => MilitaryDistrictsEntity, (militaryDistrict) => militaryDistrict.id)
  militaryDistrict?: MilitaryDistrictsEntity;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  director: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => AbitEntity, (abit) => abit.militaryCommissariat)
  abit?: AbitEntity[];
}
