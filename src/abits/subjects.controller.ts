import { Controller, Get } from '@nestjs/common'
import { SubjectsService } from './subjects.service'

@Controller('subjects')
export class SubjectController {
  constructor(private subjectService: SubjectsService) {}

  @Get()
  async get() {
    const subject = await this.subjectService.find({});
    return subject;
  }

}
