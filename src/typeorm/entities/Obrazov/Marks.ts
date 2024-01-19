import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'marks'})
export class Marks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rus: string

    @Column()
    mat: string

    @Column()
    phiz: string

    @Column()
    inf: string

    @Column()
    obsh: string

    @Column()
    geo: string

    @Column()
    him: string

    @Column()
    ist: string

    @Column()
    bio: string

    @Column()
    ph_p: string

    @Column()
    lang: string

}