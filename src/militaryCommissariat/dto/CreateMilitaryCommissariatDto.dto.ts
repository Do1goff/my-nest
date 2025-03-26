import { IsOptional, IsString } from 'class-validator'

export class CreateMilitaryCommissariatDto {
  @IsOptional()
  @IsString()
  region: string

  @IsOptional()
  @IsString()
  telephone: string

  @IsOptional()
  @IsString()
  director: string

  @IsString()
  @IsOptional()
  address: string

  @IsOptional()
  @IsString()
  email: string
}
