import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { AbitEntity } from "../../abits/entity/abit.entity"
import { SubjectsEntity } from "../../abits/entity/subjects.entity"

@Entity({ name:'ege_marks'})
export class EgeMarksEntity {
    
    @PrimaryGeneratedColumn()
    abitSubjectId: number;
    
    @Column()
    abitId: number;

    @Column()
    subjectId: number;

    @Column()
    mark: number;

    @ManyToOne(() => AbitEntity, (abit) => abit.id)
    abit?: AbitEntity

    @ManyToOne(() => SubjectsEntity, (subject) => subject.id)
    subject?: SubjectsEntity
}