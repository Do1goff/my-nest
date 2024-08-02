import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PassportIssuedByEntity } from './passportIssuedBy.entity'

@Entity({ name: 'passport' })
export class PassportEntity { 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abitId:number

  @Column({nullable:true})
  series: number;

  @Column({nullable:true})
  num: number;

  @Column({nullable:true})
  birthplace: string;

  @Column({nullable:true})
  date_issue: Date;

  @ManyToOne(() => PassportIssuedByEntity)
  issued_by: PassportIssuedByEntity;

  @Column({nullable:true})
  department_code: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
