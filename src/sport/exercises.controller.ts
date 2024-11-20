import { Controller, Get } from '@nestjs/common'
import { ExercisesService } from './exercises.service'

@Controller('exercises')
export class ExerciseController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  async get() {
    const exercise = await this.exercisesService.find({});
    return exercise;
  }

}
