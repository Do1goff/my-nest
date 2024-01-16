import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tel } from "./Tel";
import { Pasport } from "./Pasort";
import { Mother } from "./Mother";
import { Father } from "./Father";


@Entity({ name:'abits'})
export class Abit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    otchestvo: string

    @Column()
    n_ld: number

    @Column()
    spec: number

    @Column()
    l_n: string

    @OneToMany(() => Tel, (tel) => tel.abit)
    @JoinColumn()
    tels: Tel[]

    @OneToOne(() => Pasport)
    @JoinColumn()
    pasport: Pasport

    @OneToOne(() => Mother)
    @JoinColumn()
    mother: Mother

    @OneToOne(() => Father)
    @JoinColumn()
    father: Father



}
