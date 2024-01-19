import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'vk'})
export class VK {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vk:string
}
