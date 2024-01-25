import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'vst_isp'})
export class Vst_Isp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    mat: number

    @Column({nullable:true})
    rus: number

    @Column({nullable:true})
    phiz: number

    @Column({nullable:true})
    inf: number

    @Column({nullable:true})
    geo: number

    @Column({nullable:true})
    obsh: number

}