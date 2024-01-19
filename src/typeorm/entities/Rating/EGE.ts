import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'ege'})
export class EGE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mat: number

    @Column()
    rus: number

    @Column()
    phiz: number

    @Column()
    inf: number

    @Column()
    geo: number

    @Column()
    obsh: number

}