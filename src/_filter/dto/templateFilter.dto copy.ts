import {
  IsArray,
  IsJSON,
  IsString
} from 'class-validator'

export class TemplateFilterDto {
  @IsString()
  author: string;
  
  @IsArray()
  headers: string[];
  
  @IsJSON()
  filters: JSON;
}
