import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateMilitaryCommissariatDto {
  @IsString()
  name: string;

  @IsString()
  name_official: string;

  @IsNumber()
  level: number;

  @IsString()
  type: string;

  @IsBoolean()
  municipal: boolean;

  @IsNumber()
  category: number;

  @IsString()
  region: string;

  @IsOptional()
  @IsString()
  telephone: string;

  @IsOptional()
  @IsString()
  director: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsOptional()
  @IsString()
  email: string;
}
