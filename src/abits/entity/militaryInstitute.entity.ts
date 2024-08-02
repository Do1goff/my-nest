import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'militaryInstitute' })
export class MilitaryInstituteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  abbreviation: string;
  
  @Column()
  nameOfficial: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];


}
