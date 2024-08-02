import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class CreateRegionDto {
  
  @IsString()
	name:string;

	@IsOptional()
  @IsString()
	region:string;
	
  @IsBoolean()
	countryRussia:boolean;
	
}
 