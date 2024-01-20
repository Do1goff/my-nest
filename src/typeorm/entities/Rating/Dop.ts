import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'dop'})
export class Dop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    kvot:string

    @Column({nullable:true})
    lgot:string

    @Column({nullable:true})
    ind_dost:string
}