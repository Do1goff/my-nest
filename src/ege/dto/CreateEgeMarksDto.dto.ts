import { IsNumber } from "class-validator";

export class CreateEgeMarksDto{
    @IsNumber()
    abitId: number;

    @IsNumber()
    subjectId: number;

    @IsNumber()
    mark: number;
}