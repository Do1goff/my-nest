import { IsString } from 'class-validator'

export class CreateStatusLocationDto {
  
	@IsString()
	name:string
  
}
 