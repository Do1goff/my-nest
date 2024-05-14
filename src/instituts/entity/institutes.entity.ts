import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'institutes' })
export class InstitutesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
