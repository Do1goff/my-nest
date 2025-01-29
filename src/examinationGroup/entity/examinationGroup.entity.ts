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

  @Column({default:false})
  close: boolean = false;

  @OneToMany(() => AbitEntity, (abit) => abit.admission_examination_group)
  abit?: AbitEntity;
}
