import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'telephone' })
export class TelephoneEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abitId: number;

  @Column()
  number: string;

  @Column({ nullable: true })
  note: string;

  @ManyToOne(() => AbitEntity, (abit) => abit.telephone)
  abit?: AbitEntity;
}
