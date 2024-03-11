import {
    IsBoolean,
    IsDateString,
    IsJSON,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator'
import { CurrentEducation } from '../education.interface'

export class CreateEducationDto {
  @IsNumber()
  abitId: number;

  @IsString()
  category: string;

  @IsString()
  document_education: string;

  @IsDateString()
  date_end: Date;

  @IsString()
  address: string;

  @IsString()
  institute: string;

  @IsBoolean()
  canceled: boolean;

  @IsOptional()
  @IsJSON()
  data: CurrentEducation;
}
