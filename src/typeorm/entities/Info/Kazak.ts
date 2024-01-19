import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'kazak'})
export class Kazak {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kazak:string
}
