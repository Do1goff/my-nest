import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'vs'})
export class VS {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    v_zv:string

    @Column({nullable:true})
    v_dl:string

    @Column({nullable:true})
    mesto:string

    @Column({nullable:true})
    v_ch:string

    @Column({nullable:true})
    cat:string

    @Column({nullable:true})
    uvol:string

    @Column({nullable:true})
    l_num: string

    @Column({nullable:true})
    prisv_l_num:string
}
