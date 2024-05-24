import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

interface Hello {
  message: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private prisma: PrismaService) {}

  @Get("hello")
  getHello(): Hello {
    return this.appService.getHello();
  }
}
