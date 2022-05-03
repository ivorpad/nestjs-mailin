import { Inject, Injectable } from '@nestjs/common';
import { NodeMailinOptions } from './mailin.interfaces';
import { Reflector, REQUEST } from '@nestjs/core';
import { PATTERN_META_KEY } from './mailin.decorator';
const nodeMailin = require('node-mailin');

@Injectable()
export class MailinService {
  constructor(
    @Inject('MAILIN_OPTIONS') private options: NodeMailinOptions,
    private reflector: Reflector,
    @Inject(REQUEST) private request,
  ) {
    this.start();
  }

  private start() {
    nodeMailin.start({
      port: this.options.port,
    });
  }

  async handle(data: any) {

    return 'hello'
  }
}
