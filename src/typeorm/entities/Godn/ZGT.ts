import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'zgt'})
export class ZGT {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    zgt: string

}