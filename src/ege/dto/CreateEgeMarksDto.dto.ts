import { IsDateString, IsNumber, IsOptional } from 'class-validator'

export class CreateEgeMarksDto {
  @IsOptional()
  @IsNumber()
  abitId: number;
  
  @IsOptional()
  @IsNumber()
  mark: number;

  @IsOptional()
  @IsDateString()
  date: Date;
}
