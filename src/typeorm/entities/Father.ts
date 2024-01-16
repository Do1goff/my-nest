import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'fathers'})
export class Father {
    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

}