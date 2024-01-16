import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'pasport'})
export class Pasport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seria: number

    @Column()
    num: number

    @Column()
    mest_rojd: string

    @Column()
    data_v: Date

    @Column()
    kem_v: string
}