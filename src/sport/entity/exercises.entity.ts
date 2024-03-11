import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SportEntity } from "./sport.entity";

@Entity({name:"exercises"})
export class ExercisesEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string

    @OneToMany(() => SportEntity, sport => sport.abitId)
    sport?: SportEntity[] 

}