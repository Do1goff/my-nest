import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"ph_p"})
export class Ph_P{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    n_power: number

    @Column()
    power:number

    @Column()
    n_speed:number

    @Column()
    speed:number

    @Column()
    n_vnsl:number

    @Column()
    vnsl:number
}