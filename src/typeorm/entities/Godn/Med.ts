import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"med"})
export class Med {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    med: string

}