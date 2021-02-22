import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getManifest(@Query('url') url: string): Promise<string> {
    return this.appService.getManifest(url);
  }
}
