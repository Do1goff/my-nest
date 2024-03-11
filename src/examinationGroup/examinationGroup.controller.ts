import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common'
import { CreateExaminationGroupDto } from './dto/CreateExaminationGroupDto.dto'
import { ExaminationGroupEntity } from './entity/examinationGroup.entity'
import { ExaminationGroupService } from './examinationGroup.service'

@Controller('examination_group')
export class ExaminationGroupController {
  constructor(private examinationGroupService: ExaminationGroupService) {}

  @Post()
  async create(
    @Body() data: CreateExaminationGroupDto,
  ): Promise<ExaminationGroupEntity> {
    return this.examinationGroupService.create(data);
  }

  @Get()
  async get() {
    return await this.examinationGroupService.find({
      take: 50,
    });
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.examinationGroupService.findOne({
      where: {
        id: id,
      },
    });
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateExaminationGroupDto,
  ) {
    return await this.examinationGroupService.update(
      {
        id: id,
      },
      updateData,
    );
  }
}
