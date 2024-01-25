import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'zachisl'})
export class Zachisl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    data: string

    @Column({nullable:true})
    komis:string

    @Column({nullable:true})
    ekz_gr:string

    @Column({nullable:true})
    ist_o_acad:string

    @Column({nullable:true})
    prim:string

    @Column({nullable:true})
    otchisl:string

    @Column({nullable:true})
    data_otchisl:string
}