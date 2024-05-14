import { IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export class CreateTelephoneDto {
  @IsNumber()
  abitId: number;
  
  @IsPhoneNumber()
  number: string;

  @IsOptional()
  @IsString()
  note: string;
}
