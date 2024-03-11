import { IsEnum, IsString } from "class-validator"
import { DistrictType } from "../entity/militaryCommissariats.entity"

export class CreateMilitaryCommissariatDto{
    @IsEnum(DistrictType)
    district:DistrictType

    @IsString()
    name:string

    @IsString()
    telephone:string

    @IsString()
    director:string

    @IsString()
    address:string

    @IsString()
    email:string
}