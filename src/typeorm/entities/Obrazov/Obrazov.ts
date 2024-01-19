import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'obrazov'})
export class Obrazov {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    obrazov: string

    @Column()
    doc_obr:string

}