import { AbitEntity } from 'src/abits/entity/abit.entity'
import { LocationsEntity } from 'src/locations/entity/locations.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'institutes' })
export class InstitutesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
 
  @ManyToOne(() => LocationsEntity, (location) => location.id)
  address?: LocationsEntity;

  @OneToMany(() => AbitEntity, (abit) => abit.education_institute)
  abitEducation?: AbitEntity;
  
  @OneToMany(() => AbitEntity, (abit) => abit.uncanceledEducation_institute)
  abitUncanceledEducation?: AbitEntity;
}
