export type CreateAbitParams = {
    firstName: string
    lastName: string
    otchestvo: string
    n_ld: string

}
export type CreateAbitPasportParams = {
    seria: number
    num: number
    mest_rojd: string
    data_v: Date
    kem_v: string
}
export type UpdateAbitParams = {
    firstName: string
    lastName: string
    otchestvo: string
    dob: Date
    n_ld: string

}
export type CreateParentParams = {
    firstName:string
    lastName:string
}
export type CreateINNParams = {
    inn: string;
}
export type CreateSNILSParams = {
    snils: string;
}
export type CreateMedParams = {
    med: string
}
export type CreateMVDParams = {
    mvd: string
}
export type CreatePOParams = {
    p_o: string
}
export type CreateZGTParams = {
    zgt: string
}
export type CreateInfoParams = {
    dob:string
    nacional:string
    pol:string
    s_p:string
    deti:string
    soc_stat:string
    tel:string
    dom:string
}
export type CreateKazakParams = {
    kazak:string
}
export type CreateVKParams = {
    vk:string
}
export type CreateMarksParams = {
    rus: string
    mat: string
    phiz: string
    inf: string
    obsh: string
    geo: string
    him: string
    ist: string
    bio: string
    ph_p: string
    lang: string
}
export type CreateObrazovParams = {
    obrazov: string
    doc_obr:string
}
export type CreateL_NumParams = {
    l_num: string
    prisv_l_num:string
}
export type CreateLDParams = {
    reg_ld: string
    data_reg_ld:string
    arm_ld:string
}
export type CreateSpecParams = {
    spec_vk: string
    spec1:string
    spec2:string
    spec3:string
    spec:string
}
export type CreateDopParams = {
    kvot:string
    lgot:string
    ind_dost:string
}
export type CreateEGEParams = {
    mat: number
    rus: number
    phiz: number
    inf: number
    geo: number
    obsh: number
}
export type CreatePh_PParams = {
    n_power: number
    power:number
    n_speed:number
    speed:number
    n_vnsl:number
    vnsl:number
}
