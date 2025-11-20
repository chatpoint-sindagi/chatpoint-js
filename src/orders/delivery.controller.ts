import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('api')
export class DeliveryController {
  constructor(private ordersService: OrdersService) {}

  @Get('delivery-orders')
  async getDeliveryOrders() {
    const orders = await this.ordersService.getAllOrders();
    return { success: true, orders };
  }

  @Post('update-order-status')
  async updateStatus(@Body() body: { orderId: string; status: 'delivered' | 'cancelled' }) {
    const order = await this.ordersService.updateStatus(body.orderId, body.status);
    return { success: true, order };
  }
}