import { IsNumber, IsOptional, IsString } from 'class-validator'

export class ExportListsDto {
  data: any

  @IsString()
  fileName: string
  @IsOptional()
  @IsNumber()
  lists: number
}
