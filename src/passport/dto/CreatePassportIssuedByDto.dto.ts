import { IsString } from 'class-validator'

export class CreatePassportIssuedByDto {
  @IsString()
  name: string;
  
  @IsString()
  department_code: string;
}
 