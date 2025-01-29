import { IsNumber, IsOptional } from "class-validator"
import { ExercisesEntity } from '../entity/exercises.entity'

export class CreateSportDto{
    @IsNumber()
    abitId: number;

    @IsNumber()
    score: number;

    @IsOptional()
    exercises: ExercisesEntity;
}