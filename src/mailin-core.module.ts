import { Module } from '@nestjs/common';
import { MailinModule } from './mailin.module';
import { MailinService } from './mailin.service';

@Module({
  providers: [MailinService]
})
export class MailinCoreModule {}
