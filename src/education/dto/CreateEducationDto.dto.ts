import { IsDateString, IsNumber, IsOptional } from 'class-validator'

export class CreateEducationDto {

  @IsOptional()
  @IsDateString()
  date_end: Date;

  // @IsOptional()
  // @IsJSON()
  // document_education: DocumentEducationData
  
  @IsOptional()
  @IsNumber()
  abitId:number
}
 