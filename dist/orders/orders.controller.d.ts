import { OrdersService } from './orders.service';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    saveOrder(body: any, req: any): Promise<{
        success: boolean;
        orderId: import("mongoose").Types.ObjectId;
    }>;
    getMyOrders(req: any): Promise<{
        success: boolean;
        orders: (import("mongoose").Document<unknown, {}, import("./order.schema").Order, {}, {}> & import("./order.schema").Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
}
