import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Abit } from "./Abit";
import { Mother } from "./Mother";
import { Papa } from "./Papa";


@Entity({ name:'parents'})
export class Parent {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Mother)
    @JoinColumn()
    mother: Mother

    @OneToOne(() => Papa)
    @JoinColumn()
    papa: Papa

    @ManyToOne(() => Abit, (abit) =>abit.parents)
    abit:Abit
    
}