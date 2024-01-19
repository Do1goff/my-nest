import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'fathers'})
export class Father {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

}