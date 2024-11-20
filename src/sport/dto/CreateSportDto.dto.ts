import { IsNumber } from "class-validator"

export class CreateSportDto{
    @IsNumber()
    abitId: number;

    @IsNumber()
    score: number;
}