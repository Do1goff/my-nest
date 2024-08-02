import { IsString } from 'class-validator'

export class CreateReasonExpulsionDto {
  @IsString()
  name: string;
  @IsString()
  abbreviation: string;
  @IsString()
  foundation: string;
}
 