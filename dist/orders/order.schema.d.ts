import { Document, Types } from 'mongoose';
export declare class Order extends Document {
    userId: Types.ObjectId;
    user: {
        name: string;
        phone: string;
    };
    shop: string;
    items: {
        name: string;
        price: number;
        quantity: number;
    }[];
    itemsTotal: number;
    deliveryCharge: number;
    totalAmount: number;
    address: {
        name: string;
        phone: string;
        line1: string;
        line2: string;
    };
    paymentMethod: string;
    status: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order, any, {}> & Order & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Order> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
