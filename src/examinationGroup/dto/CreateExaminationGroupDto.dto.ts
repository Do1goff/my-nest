import { IsString } from 'class-validator'

export class CreateExaminationGroupDto {
  @IsString()
  name: string;
}
