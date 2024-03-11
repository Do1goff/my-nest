import { AbitEntity } from 'src/abits/entity/abit.entity'
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { CurrentEducation } from '../education.interface'

@Entity({ name: 'education' })
export class EducationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abitId: number;

  @Column()
  category: string;

  @Column()
  date_end: Date;

  @Column()
  institute: string;

  @Column()
  address: string;

  @Column()
  document_education: string;

  @Column({ default: true })
  canceled?: boolean = true;

  @Column('simple-json', { nullable: true })
  data?: CurrentEducation;

  @ManyToOne(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
