import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Hello {
  message: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getHello(): Hello {
    return this.appService.getHello();
  }
}
