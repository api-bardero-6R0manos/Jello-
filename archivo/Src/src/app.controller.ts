import { Controller, Get, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from './throttler/throttler.guard';

@Controller()
export class AppController {
  @UseGuards(ThrottlerGuard)
  @Get()
  getHello(): string {
    return 'API jalando pa crocraxker';
  }
}
