import { OrdersService } from './orders.service';
export declare class DeliveryController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getDeliveryOrders(): Promise<{
        success: boolean;
        orders: (import("mongoose").Document<unknown, {}, import("./order.schema").Order, {}, {}> & import("./order.schema").Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    updateStatus(body: {
        orderId: string;
        status: 'delivered' | 'cancelled';
    }): Promise<{
        success: boolean;
        order: import("mongoose").Document<unknown, {}, import("./order.schema").Order, {}, {}> & import("./order.schema").Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
}
