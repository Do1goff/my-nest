import { IsNumber } from "class-validator";

export class CreateSportDto{
    @IsNumber()
    abitId: number;

    @IsNumber()
    exercisesId: number;

    @IsNumber()
    score: number;
}