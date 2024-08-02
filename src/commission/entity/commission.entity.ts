import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'commission' })
export class CommissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  region:string = '';

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
