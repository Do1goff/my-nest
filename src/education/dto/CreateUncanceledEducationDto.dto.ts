import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateUncanceledEducationDto {

  @IsOptional()
  @IsString()
  date_end: Date;

  @IsOptional()
  @IsDateString()
  date_admission: Date
  
  @IsOptional()
  @IsString()
  period_study: string

  @IsOptional()
  @IsNumber()
  course: number

  @IsOptional()
  @IsNumber()
  semesters_end: number

  @IsOptional()
  @IsString()
  note:string
}
 