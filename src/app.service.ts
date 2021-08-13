import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  fiveSecondMsg() {
    this.logger.debug('mesaje cada cinco segundos')
  }

  @Interval(5000)
  intervatMethod(){
    this.logger.debug('Otro mesaje cada cinco segundos')
  }

}
