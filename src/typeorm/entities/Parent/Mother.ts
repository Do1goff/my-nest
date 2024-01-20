import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'mothers'})
export class Mother {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    firstName: string

    @Column({nullable:true})
    lastName: string

}