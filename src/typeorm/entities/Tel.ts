import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Abit } from "./Abit";


@Entity({ name:'tels'})
export class Tel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @ManyToOne(() => Abit, (abit) =>abit.tels)
    abit:Abit
    
}