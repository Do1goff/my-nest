import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'passport_issued_by' })
export class PassportIssuedByEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  department_code: string;

  @OneToMany(() => AbitEntity, (abit) => abit.passport_issued_by)
  abit?: AbitEntity;
}
