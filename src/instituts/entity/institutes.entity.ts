import { EducationEntity } from 'src/education/entity/education.entity'
import { UncanceledEducationEntity } from 'src/education/entity/uncanceledEducation.entity'
import { LocationsEntity } from 'src/locations/entity/locations.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'institutes' })
export class InstitutesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
 
  // @Column()
  // address: string;
  @ManyToOne(() => LocationsEntity, (location) => location.id)
  address?: LocationsEntity;

  @OneToMany(() => EducationEntity, (education) => education.id)
  education?: EducationEntity;
  
  @OneToMany(() => UncanceledEducationEntity, (uncanceledEducation) => uncanceledEducation.id)
  uncanceledEducation?: UncanceledEducationEntity;
}
