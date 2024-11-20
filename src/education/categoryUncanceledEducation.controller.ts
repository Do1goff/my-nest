import { Controller, Get } from '@nestjs/common'
import { CategoryUncanceledEducationService } from './categoryUncanceledEducation.service'

@Controller('categoryUncanceledEducation')
export class CategoryUncanceledEducationController {
  constructor(
    private categoryUncanceledEducationService: CategoryUncanceledEducationService,
  ) {}

  @Get()
  async get() {
    const category = await this.categoryUncanceledEducationService.find({});
    return category;
  }

}
