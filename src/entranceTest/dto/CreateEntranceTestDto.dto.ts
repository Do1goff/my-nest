import { IsNumber } from "class-validator";

export class CreateEntranceTestDto{
    @IsNumber()
    abitId: number;

    @IsNumber()
    subjectId: number;

    @IsNumber()
    mark: number;
}