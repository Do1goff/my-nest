import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ExercisesEntity } from "./exercises.entity";
import { AbitEntity } from "src/abits/entity/abit.entity";

@Entity({name:"sport"})
export class SportEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    abitId: number;

    @Column()
    exercisesId: number;

    @Column()
    score: number;

    @ManyToOne(() => AbitEntity, (abit) => abit.id)
    abit?: AbitEntity

    @ManyToOne(() => ExercisesEntity, (exercises) => exercises.id)
    exercises?: ExercisesEntity
}