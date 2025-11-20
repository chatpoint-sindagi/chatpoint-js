import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // We removed the @Get() route → no more "Hello World"
  // Now static files (index.html) will be served automatically
}