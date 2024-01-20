import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'mvd'})
export class MVD {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    mvd: string

}