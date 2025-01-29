import { IsArray, IsOptional, IsString } from 'class-validator'

export class UserDto {
  @IsOptional()
  @IsString()
  username: string

  @IsOptional()
  @IsString()
  password: string

  @IsOptional()
  @IsArray()
  access: string[]
}
