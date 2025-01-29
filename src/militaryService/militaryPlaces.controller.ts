import { Controller, Get } from '@nestjs/common'
import { MilitaryPlacesService } from './militaryPlaces.service'

@Controller('militaryPlaces')
export class MilitaryPlacesController {
  constructor(private MilitaryPlacesService: MilitaryPlacesService) {}

  @Get()
  async get() {
    const militaryPlaces = await this.MilitaryPlacesService.find({
      relations: { abit: true },
    })
    return militaryPlaces
  }
}
