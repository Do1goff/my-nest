import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'categoryUncanceledEducation' })
export class CategoryUncanceledEducationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @OneToMany(() => AbitEntity, (abit) => abit.id)
  // abit?: AbitEntity[];
}
