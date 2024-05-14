import { IsNumber, IsOptional } from 'class-validator'

export class CreateSchoolMarksDto {
  @IsOptional()
  @IsNumber()
  abitId: number;

  // @IsOptional()
  // @IsNumber()
  // subjectId: number;

  @IsOptional()
  @IsNumber()
  mark: number;
}
