import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'examination_group' })
export class ExaminationGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
 
  @Column()
  abbreviation: string;

  @Column()
  number: number;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
