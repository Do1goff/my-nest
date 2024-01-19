import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'snils'})
export class SNILS {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    snils: string;

    
}