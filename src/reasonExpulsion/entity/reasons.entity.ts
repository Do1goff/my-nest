import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'reasons' })
export class ReasonsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  abbreviation: string;
  
  @Column()
  foundation: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
