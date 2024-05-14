import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

export enum DistrictType {
  CENTRAL = 'central',
  WEST = 'west',
  EAST = 'east',
  SOUTH = 'south',
  NORTH = 'north',
}

@Entity({ name: 'military_commissariats' })
export class MilitaryCommissariatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: DistrictType })
  district: DistrictType;

  @Column()
  name: string;

  @Column({ nullable: true })
  telephone: string = '';

  @Column({ nullable: true })
  director: string = '';

  @Column({ nullable: true })
  address: string = '';

  @Column({ nullable: true })
  email: string = '';

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];
}
