import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateFamilyDto {
  @IsNumber()
  abitId: number;

  @IsString()
  @IsOptional()
  kinship: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  surName: string;

  @IsDateString()
  @IsOptional()
  birthday: Date;

  @IsString()
  @IsOptional()
  status: string;

  @IsBoolean()
  @IsOptional()
  fail: boolean;
}
