import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('api')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('save-order')
  @UseGuards(JwtAuthGuard)
  saveOrder(@Body() body: any, @Request() req: any) {
    return this.ordersService.createOrder({ ...body, userId: req.user.userId });
  }

  @Get('my-orders')
  @UseGuards(JwtAuthGuard)
  getMyOrders(@Request() req: any) {
    return this.ordersService.getUserOrders(req.user.userId);
  }
}