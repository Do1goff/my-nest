import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'l_d'})
export class LD {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    reg_ld: string

    @Column({nullable:true})
    data_reg_ld:string

    @Column({nullable:true})
    arm_ld:string

}