import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'family'})
export class Family {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    adres: string

    @Column({nullable:true})
    soc_status: string

    @Column({nullable:true})
    sirota: string

    @Column({nullable:true})
    deti: string

}