import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreateSportDto } from './dto/CreateSportDto.dto'
import { SportService } from './sport.service'

@Controller('sport')
export class SportController {
  constructor(private sportService: SportService) {}

  @Post()
  async create(@Body() data: CreateSportDto) {
    const ASid = await this.sportService.find({
      where: {
        abitId: data.abitId,
      },
      relations: {
        exercises: true,
      },
    })
    if (
      ASid.find((sport) => sport.exercises.type == data.exercises.type) != null
    ) {
      const x = ASid.find(
        (sport) => sport.exercises.type == data.exercises.type,
      )
      await this.sportService.update(
        {
          id: x.id,
        },
        data,
      )
      return await this.sportService.findOne({
        where: {
          id: x.id,
        },
        relations: {
          exercises: true,
        },
      })
    } else {
      const score = this.sportService.create(data)
      return await this.sportService.findOne({
        where: {
          id: (await score).id,
        },
        relations: {
          exercises: true,
        },
      })
    }
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.sportService.find({
      where: {
        abitId: id,
      },
      relations: {
        exercises: true,
      },
    })
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sportService.findOne({
      where: {
        id: id,
      },
      relations: {
        exercises: true,
      },
    })
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateSportDto,
  ) {
    await this.sportService.update(
      {
        id: id,
      },
      updateData,
    )
    return await this.sportService.findOne({
      where: {
        id: id,
      },
      relations: {
        exercises: true,
      },
    })
  }
}
