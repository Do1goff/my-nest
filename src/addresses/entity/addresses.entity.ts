import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'addresses' })
export class AddressesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
