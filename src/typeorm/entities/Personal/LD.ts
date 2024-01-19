import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'l_d'})
export class LD {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reg_ld: string

    @Column()
    data_reg_ld:string

    @Column()
    arm_ld:string

}