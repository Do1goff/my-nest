import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'fathers'})
export class Father {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    firstName: string

    @Column({nullable:true})
    lastName: string

}