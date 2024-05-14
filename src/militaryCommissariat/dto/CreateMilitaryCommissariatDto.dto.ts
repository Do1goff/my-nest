import { IsEnum, IsOptional, IsString } from 'class-validator'
import { DistrictType } from '../entity/militaryCommissariats.entity'

export class CreateMilitaryCommissariatDto {
  @IsEnum(DistrictType)
  district: DistrictType;

  @IsString()
  name: string;

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
