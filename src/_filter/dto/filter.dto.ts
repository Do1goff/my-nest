import {
  IsArray
} from 'class-validator'

export class FilterDto {
  @IsArray()
  field: string[];
  
  @IsArray()
  compare: string[];
  
  @IsArray()
  values: any[];
}
