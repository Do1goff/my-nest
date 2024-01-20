import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'l_num'})
export class L_Num {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    l_num: string

    @Column({nullable:true})
    prisv_l_num:string

}