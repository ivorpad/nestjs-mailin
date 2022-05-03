import { Test, TestingModule } from '@nestjs/testing';
import { MailinService } from './mailin.service';

describe('MailinService', () => {
  let service: MailinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailinService],
    }).compile();

    service = module.get<MailinService>(MailinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
