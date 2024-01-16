export type CreateAbitParams = {
    firstName: string
    lastName: string
    otchestvo: string
    n_ld: number
    spec: number
    l_n: string
}
export type CreateAbitPasportParams = {
    seria: number
    num: number
    mest_rojd: string
    data_v: Date
    kem_v: string
}
export type CreateAbitTelParams = {
    number:number
}
export type UpdateAbitParams = {
    firstName: string
    lastName: string
    otchestvo: string
    dob: Date
    n_ld: number
    spec: number
    l_n: string
}
export type CreateParentParams = {
    firstName:string
    lastName:string
}
