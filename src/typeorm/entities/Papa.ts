import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'papas'})
export class Papa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

}