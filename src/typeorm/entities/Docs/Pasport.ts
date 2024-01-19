import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'pasport'})
export class Pasport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    seria: number

    @Column({nullable:true})
    num: number

    @Column({nullable:true})
    mest_rojd: string

    @Column({nullable:true})
    data_v: Date

    @Column({nullable:true})
    kem_v: string

    @Column({nullable:true})
    kod_pdr:string
}