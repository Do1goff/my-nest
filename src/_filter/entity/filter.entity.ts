import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'filter' })
export class FilterEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  author: string

  @Column({ type: 'simple-array', nullable: true })
  headers: string[]

  @Column({ type: 'simple-json', nullable: true })
  filters: JSON
}
