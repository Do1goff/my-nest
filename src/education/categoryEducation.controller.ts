import { Controller, Get } from '@nestjs/common'
import { CategoryEducationService } from './categoryEducation.service'

@Controller('categoryEducation')
export class CategoryEducationController {
  constructor(private categoryEducationService: CategoryEducationService) {}

  @Get()
  async get() {
    const category = await this.categoryEducationService.find({});
    return category;
  }

}
