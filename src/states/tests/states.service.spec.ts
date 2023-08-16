import { Test, TestingModule } from '@nestjs/testing';
import { StatesService } from '../services/states.service';

describe('StatesService', () => {
  let service: StatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatesService],
    }).compile();

    service = module.get<StatesService>(StatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
