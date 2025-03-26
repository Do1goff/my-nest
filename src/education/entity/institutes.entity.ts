import { AbitEntity } from 'src/abits/entity/abit.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

export enum SuvorovtsyType {
  PRESIDENT = 'ПКУ',
  SUVOROV = 'СВУ',
  CADET = 'КК',
  NACHIMOV = 'НВМУ',
  PLP = 'ПЛП',
}

@Entity({ name: 'institutes' })
export class InstitutesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  address: string

  @Column({ nullable: true })
  region: string

  @Column({ nullable: true })
  abbreviation: string

  @Column({ type: 'enum', enum: SuvorovtsyType, nullable: true })
  type: SuvorovtsyType

  @OneToMany(() => AbitEntity, (abit) => abit.education_institute)
  abitEducation?: AbitEntity

  @OneToMany(() => AbitEntity, (abit) => abit.uncanceledEducation_institute)
  abitUncanceledEducation?: AbitEntity
}
