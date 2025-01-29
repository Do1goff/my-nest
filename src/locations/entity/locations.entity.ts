// import { AbitEntity } from 'src/abits/entity/abit.entity'
// import { InstitutesEntity } from 'src/education/entity/institutes.entity'
// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

// @Entity({ name: 'locations' })
// export class LocationsEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   regionId: number;
  
//   @Column({nullable:true})
//   districtId: number;
  
//   @Column({nullable:true})
//   cityId: number;
  
//   // @ManyToOne(() => RegionsEntity, (region) => region.location)
//   // region?: RegionsEntity;

//   // @ManyToOne(() => DistrictsEntity, (district) => district.location)
//   // district?: DistrictsEntity;

//   // @ManyToOne(() => CitiesEntity, (city) => city.location)
//   // city?: CitiesEntity;
  
//   @OneToMany(() => AbitEntity, (abit) => abit.residence)
//   abit?: AbitEntity;
  
//   @OneToMany(() => InstitutesEntity, (institute) => institute.address)
//   institute?: InstitutesEntity;
// }
