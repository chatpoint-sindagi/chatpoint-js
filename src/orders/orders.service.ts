import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async createOrder(data: any) {
    const { userId, name, phone, address1, address2, cart, itemsTotal, deliveryCharge = 30, grandTotal } = data;

    const items: any[] = [];
    let shopName: string | null = null;

    for (const shop in cart) {
      for (const itemName in cart[shop]) {
        const it = cart[shop][itemName];
        if (it.qty > 0) {
          items.push({ name: itemName, price: it.price, quantity: it.qty });
          if (!shopName) shopName = shop;
        }
      }
    }

    const order = await this.orderModel.create({
      userId,
      user: { name, phone },
      shop: shopName || 'Unknown Shop',
      items,
      itemsTotal,
      deliveryCharge,
      totalAmount: grandTotal,
      address: { name, phone, line1: address1, line2: address2 || '' },
      paymentMethod: 'cash',
      status: 'pending',
    });

    return { success: true, orderId: order._id };
  }

  async getUserOrders(userId: string) {
    const orders = await this.orderModel.find({ userId }).sort({ createdAt: -1 });
    return { success: true, orders };
  }

  // ADDED FOR DELIVERY PORTAL
  async getAllOrders() {
    return this.orderModel.find({ status: 'pending' }).sort({ createdAt: -1 }).limit(50);
  }

  async updateStatus(orderId: string, status: 'delivered' | 'cancelled') {
    return this.orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
  }
}