import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'dop'})
export class Dop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kvot:string

    @Column()
    lgot:string

    @Column()
    ind_dost:string
}