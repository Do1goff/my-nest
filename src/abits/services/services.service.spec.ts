import { Test, TestingModule } from '@nestjs/testing';
import { AbitService } from './services.service';

describe('ServicesService', () => {
  let service: AbitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbitService],
    }).compile();

    service = module.get<AbitService>(AbitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
