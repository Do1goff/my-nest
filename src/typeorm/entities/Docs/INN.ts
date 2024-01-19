import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'inn'})
export class INN {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    inn: string;

    
}