import { Test, TestingModule } from '@nestjs/testing';
import { AbitsController } from './controllers.controller';

describe('ControllersController', () => {
  let controller: AbitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbitsController],
    }).compile();

    controller = module.get<AbitsController>(AbitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
