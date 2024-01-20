import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pasport } from "./Docs/Pasport";
import { Mother } from "./Parent/Mother";
import { Father } from "./Parent/Father";
import { INN } from "./Docs/INN";
import { SNILS } from "./Docs/SNILS";
import { Med } from "./Godn/Med";
import { MVD } from "./Godn/MVD";
import { P_O } from "./Godn/PO";
import { ZGT } from "./Godn/ZGT";
import { Info } from "./Info/Info";
import { Kazak } from "./Info/Kazak";
import { VK } from "./Info/VK";
import { Marks } from "./Obrazov/Marks";
import { Obrazov } from "./Obrazov/Obrazov";
import { L_Num } from "./Personal/L_Num";
import { LD } from "./Personal/LD";
import { Dop } from "./Rating/Dop";
import { EGE } from "./Rating/EGE";
import { Ph_P } from "./Rating/Ph_P";
import { Spec } from "./Personal/Spec";


@Entity({ name:'abits'})
export class Abit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    otchestvo: string

    @Column()
    n_ld: string

    @OneToOne(() => Pasport)
    @JoinColumn()
    pasport: Pasport

    @OneToOne(() => Mother)
    @JoinColumn()
    mother: Mother

    @OneToOne(() => Father)
    @JoinColumn()
    father: Father

    @OneToOne(() => INN)
    @JoinColumn()
    inn: INN

    @OneToOne(() => SNILS)
    @JoinColumn()
    snils: SNILS

    @OneToOne(() => MVD)
    @JoinColumn()
    mvd: MVD

    @OneToOne(() => Med)
    @JoinColumn()
    med: Med

    @OneToOne(() => P_O)
    @JoinColumn()
    p_o: P_O

    @OneToOne(() => ZGT)
    @JoinColumn()
    zgt: ZGT

    @OneToOne(() => Info)
    @JoinColumn()
    info: Info

    @OneToOne(() => Kazak)
    @JoinColumn()
    kazak: Kazak

    @OneToOne(() => VK)
    @JoinColumn()
    vk: VK

    @OneToOne(() => Marks)
    @JoinColumn()
    marks: Marks

    @OneToOne(() => Obrazov)
    @JoinColumn()
    obrazov: Obrazov

    @OneToOne(() => L_Num)
    @JoinColumn()
    l_num: L_Num

    @OneToOne(() => LD)
    @JoinColumn()
    ld: LD

    @OneToOne(() => Dop)
    @JoinColumn()
    dop: Dop

    @OneToOne(() => EGE)
    @JoinColumn()
    ege: EGE

    @OneToOne(() => Ph_P)
    @JoinColumn()
    ph_p: Ph_P

    @OneToOne(() => Spec)
    @JoinColumn()
    spec: Spec
}
