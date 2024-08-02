import { IsString } from 'class-validator'

export class CreateMilitaryUnitDto {
  @IsString()
  name: string;
  
  // @IsString()
  // address: string;
}
 