import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name:'spec'})
export class Spec {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    spec_vk: string

    @Column({nullable:true})
    spec1:string

    @Column({nullable:true})
    spec2:string

    @Column({nullable:true})
    spec3:string

    @Column({nullable:true})
    spec:string

}