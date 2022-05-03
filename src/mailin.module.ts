import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import { MAILIN_OPTIONS } from './mailin.constants';
import { NodeMailinOptions } from './mailin.interfaces';
import { MailinService } from './mailin.service';
import { Reflector } from '@nestjs/core';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';

@Module({
  imports: [DiscoveryModule],
})
export class MailinModule {
  static forRoot(options: NodeMailinOptions): DynamicModule {
    return {
      module: MailinModule,
      providers: [
        {
          provide: MAILIN_OPTIONS,
          useValue: options,
        },
        MailinService,
        Reflector,
      ],
      exports: [MailinService],
    };
  }
}
