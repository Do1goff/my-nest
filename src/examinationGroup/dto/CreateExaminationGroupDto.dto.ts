import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateExaminationGroupDto {
  @IsOptional()
  @IsString()
  abbreviation: string;

  @IsOptional()
  @IsNumber()
  number: number;
  
  @IsOptional()
  @IsString()
  name: string;
  
  @IsOptional()
  @IsBoolean()
  close: boolean;
}
