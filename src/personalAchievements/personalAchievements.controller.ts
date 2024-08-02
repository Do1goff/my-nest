import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreatePersonalAchievementsDto } from './dto/CreatePersonalAchievementsDto.dto'
import { PersonalAchievementsService } from './personalAchievements.service'

@Controller('personal_achievements')
export class PersonalAchievementsController {
  constructor(
    private personalAchievementsService: PersonalAchievementsService,
  ) {}

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.personalAchievementsService.find({
      where: {
        abitId: id,
      },
      relations: {
        achievement: true,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreatePersonalAchievementsDto,
  ) {
    await this.personalAchievementsService.update(
      {
        abitAchievementId: id,
      },
      updateData,
    );
    return await this.personalAchievementsService.findOne({
      where: {
        abitAchievementId: id,
      },
      relations: {
        achievement: true,
      },
    });
  }

  @Post()
  async create(@Body() data: CreatePersonalAchievementsDto) {
    const achievement = this.personalAchievementsService.create(data);
    return await this.personalAchievementsService.findOne({
      where: {
        abitAchievementId: (await achievement).abitAchievementId,
      },
      relations: {
        achievement: true,
      },
    });
  }
}
