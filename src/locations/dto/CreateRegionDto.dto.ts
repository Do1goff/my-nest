import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class CreateRegionDto {
  
	@IsOptional()
  @IsString()
	name:string;

	@IsOptional()
  @IsString()
	region:string;
	
	@IsOptional()
  @IsBoolean()
	countryRussia:boolean;
	
}
 