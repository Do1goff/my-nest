import { IsOptional, IsString } from 'class-validator'

export class CreateMilitaryUnitDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  address: string

  @IsOptional()
  @IsString()
  mail: string
}
