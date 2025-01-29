import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'categoryUncanceledEducation' })
export class CategoryUncanceledEducationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  abbreviation: string;

  @Column()
  level: string;

  @OneToMany(() => AbitEntity, (abit) => abit.uncanceledEducation_category)
  abit?: AbitEntity[];
}
