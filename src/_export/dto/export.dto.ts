import { IsString } from 'class-validator'

export class ExportDto {
  data: any

  @IsString()
  fileName: string
}
