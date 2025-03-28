import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'family' })
export class FamilyEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  abitId: number

  @Column()
  kinship: string

  @Column()
  firstName: string = ''

  @Column()
  lastName: string = ''

  @Column({ nullable: true })
  lastName_second: string

  @Column({ nullable: true })
  surName: string

  @Column({ nullable: true })
  birthday: Date

  @Column({ nullable: true })
  status: string = ''

  @Column({ default: false })
  fail: boolean = false

  @ManyToOne(() => AbitEntity, (abit) => abit.family, { onDelete: 'CASCADE' })
  abit?: AbitEntity
}
