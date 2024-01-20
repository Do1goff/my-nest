import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'marks'})
export class Marks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    rus: string

    @Column({nullable:true})
    mat: string

    @Column({nullable:true})
    phiz: string

    @Column({nullable:true})
    inf: string

    @Column({nullable:true})
    obsh: string

    @Column({nullable:true})
    geo: string

    @Column({nullable:true})
    him: string

    @Column({nullable:true})
    ist: string

    @Column({nullable:true})
    bio: string

    @Column({nullable:true})
    ph_p: string

    @Column({nullable:true})
    lang: string

}