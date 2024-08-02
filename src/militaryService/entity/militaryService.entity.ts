import { AbitEntity } from 'src/abits/entity/abit.entity'
import { MilitaryPlacesEntity } from 'src/militaryService/entity/militaryPlaces.entity'
import { MilitaryRanksEntity } from 'src/militaryService/entity/militaryRanks.entity'
import { MilitarySVOEntity } from 'src/militaryService/entity/militarySVO.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MilitaryUnitsEntity } from './militaryUnits.entity'

export enum MilitaryServiceCategory {
  EMPTY = 'empty',
  CONSCRIPTION = 'conscription',
  CONTRACT = 'contract',
}

@Entity({ name: 'militaryService' })
export class MilitaryServiceEntity { 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abitId:number

  @ManyToOne(() => MilitaryRanksEntity)
  rank: MilitaryRanksEntity;

  @Column({nullable:true})
  post: string;

  @ManyToOne(() => MilitaryPlacesEntity)
  place: MilitaryPlacesEntity;

  // @Column({nullable:true})
  // unit: string;
  
  @ManyToOne(() => MilitaryUnitsEntity)
  unit: MilitaryUnitsEntity;

  @Column( { type: 'enum', enum: MilitaryServiceCategory, default: MilitaryServiceCategory.EMPTY })
  category: MilitaryServiceCategory;

  @Column({default:false})
  dismissed: boolean;

  @Column({default:false})
  mobilization:boolean;
  
  @Column({default:false})
  collection:boolean;

  @ManyToOne(() => MilitarySVOEntity)
  SVO: MilitarySVOEntity

  @OneToMany(() => AbitEntity, (abit) => abit.id)
  abit?: AbitEntity;
}
