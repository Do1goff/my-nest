import { IsDateString, IsNumber, IsOptional } from 'class-validator'
import { SubjectsEntity } from 'src/abits/entity/subjects.entity'

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

  @IsOptional()
  subject: SubjectsEntity;
}
