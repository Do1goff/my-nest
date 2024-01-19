import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'p_o'})
export class P_O {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    p_o: string

}