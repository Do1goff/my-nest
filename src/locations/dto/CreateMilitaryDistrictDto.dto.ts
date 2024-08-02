import { IsString } from 'class-validator'

export class CreateMilitaryDistrictDto {
  
	@IsString()
	name:string
  
	@IsString()
	abbreviation:string
  
}
 