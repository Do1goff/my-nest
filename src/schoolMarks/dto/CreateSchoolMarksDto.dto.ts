import { IsNumber } from "class-validator";

export class CreateSchoolMarksDto{
    @IsNumber()
    abitId: number;

    @IsNumber()
    subjectId: number;

    @IsNumber()
    mark: number;
}