import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'info'})
export class Info {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    dob:string

    @Column({nullable:true})
    nacional:string

    @Column({nullable:true})
    pol:string

    @Column({nullable:true})
    s_p:string

    @Column({nullable:true})
    deti:string

    @Column({nullable:true})
    soc_stat:string

    @Column({nullable:true})
    tel:string

    @Column({nullable:true})
    dom:string
}