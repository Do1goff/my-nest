import { IsNumber, IsString } from 'class-validator'

export class CreateExaminationGroupDto {
  @IsString()
  abbreviation: string;

  @IsNumber()
  number: number;
  
}
