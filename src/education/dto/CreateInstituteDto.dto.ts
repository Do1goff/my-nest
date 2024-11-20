import { IsString } from 'class-validator'

export class CreateInstituteDto {
  @IsString()
  name: string;
  
}
 