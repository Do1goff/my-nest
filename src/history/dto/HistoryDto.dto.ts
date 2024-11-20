import { IsJSON, IsNumber, IsString } from 'class-validator'

export class HistoryDto {
  @IsNumber()
  abitId: number;

  @IsJSON()
  oldValue: any;

  @IsJSON()
  newValue: any;

  @IsString()
  changedBy: string; 
}
