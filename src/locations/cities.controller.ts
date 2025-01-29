import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CitiesService } from './cities.service'
import { CreateCityDto } from './dto/CreateCityDto.dto'

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Post()
  async create(@Body() data: CreateCityDto) {
    const reg = this.citiesService.create(data)
    const result = await this.citiesService.findOne({
      where: {
        id: (await reg).id,
      },
      relations: {
        status: true,
        district: true,
        region: true,
        abit: true,
      },
      join: {
        alias: 'city',
        leftJoinAndSelect: {
          status: 'city.status',
          district: 'city.district',
          district_status: 'district.status',
          region: 'city.region',
          region_status: 'region.status',
          abit: 'city.abit',
        },
      },
    })
    return {
      id: result.id,
      name: result.name,
      status: result.status?.name,
      district: result.district,
      district_name: result.district?.name,
      district_status: result.district?.status?.name,
      district_statusInEnd: result.district?.statusInEnd,
      region: result.region,
      region_name: result.region?.name,
      region_status: result.region?.status?.name,
      region_statusInEnd: result.region?.statusInEnd,
      abit: result.abit,
    }
  }

  @Get()
  async get() {
    const cities = await this.citiesService.find({
      relations: {
        status: true,
        district: true,
        region: true,
        abit: true,
      },
      join: {
        alias: 'city',
        leftJoinAndSelect: {
          status: 'city.status',
          district: 'city.district',
          district_status: 'district.status',
          region: 'city.region',
          region_status: 'region.status',
          abit: 'city.abit',
        },
      },
    })
    const fullCities = cities.map((city) => ({
      id: city.id,
      name: city.name,
      status: city.status?.name,
      district: city.district,
      district_name: city.district?.name,
      district_status: city.district?.status?.name,
      district_statusInEnd: city.district?.statusInEnd,
      region: city.region,
      region_name: city.region?.name,
      region_status: city.region?.status?.name,
      region_statusInEnd: city.region?.statusInEnd,
      abit: city.abit,
    }))
    return fullCities
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.citiesService.findOne({
      where: {
        id: id,
      },
      relations: {
        status: true,
        district: true,
      },
    })
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreateCityDto,
  ) {
    return await this.citiesService.update(
      {
        id: id,
      },
      updateData,
    )
  }
}
