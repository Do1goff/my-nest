import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'tek_obr'})
export class Tek_Obr {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    cat: string

    @Column({nullable:true})
    kurs:string

    @Column({nullable:true})
    data_zach: string

    @Column({nullable:true})
    data_oconch: string

    @Column({nullable:true})
    obrazov: string

    @Column({nullable:true})
    adres: string

    @Column({nullable:true})
    srok: string

    @Column({nullable:true})
    semestrs: string
}