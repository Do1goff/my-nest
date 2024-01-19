import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'l_num'})
export class L_Num {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    l_num: string

    @Column()
    prisv_l_num:string

}