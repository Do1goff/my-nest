import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'obrazov'})
export class Obrazov {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    obrazov: string

    @Column({nullable:true})
    doc_obr:string

}