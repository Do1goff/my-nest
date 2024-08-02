import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class CreatePersonalAchievementsDto {
  @IsNumber()
  abitId: number;

  @IsNumber()
  @IsOptional()
  achievementId: number;

  @IsBoolean()
  @IsOptional()
  test: boolean;
}
