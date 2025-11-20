import { Model } from 'mongoose';
import { Order } from './order.schema';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(data: any): Promise<{
        success: boolean;
        orderId: import("mongoose").Types.ObjectId;
    }>;
    getUserOrders(userId: string): Promise<{
        success: boolean;
        orders: (import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    getAllOrders(): Promise<(import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    updateStatus(orderId: string, status: 'delivered' | 'cancelled'): Promise<import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
