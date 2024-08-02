import { IsNumber, IsOptional } from 'class-validator'

export class CreateLocationDto {
	@IsOptional()
  @IsNumber()
	regionId:number
	
	@IsOptional()
  @IsNumber()
	districtId:number
	
	@IsOptional()
  @IsNumber()
	cityId:number
}
 