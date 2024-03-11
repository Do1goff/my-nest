import { IsString } from "class-validator";

export class CreateCommissionDto{
    @IsString()
    name:string
}