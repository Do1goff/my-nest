import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'mothers'})
export class Mother {
    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

}