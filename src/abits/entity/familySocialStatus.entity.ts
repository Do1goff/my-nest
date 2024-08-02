import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AbitEntity } from './abit.entity'

@Entity({ name: 'family_social_status' })
export class FamilySocialStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity[];
}
