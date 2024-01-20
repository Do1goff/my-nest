import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"ph_p"})
export class Ph_P{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    n_power: number

    @Column({nullable:true})
    power:number

    @Column({nullable:true})
    n_speed:number

    @Column({nullable:true})
    speed:number

    @Column({nullable:true})
    n_vnsl:number

    @Column({nullable:true})
    vnsl:number
}