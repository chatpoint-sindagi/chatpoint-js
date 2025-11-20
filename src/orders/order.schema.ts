import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({
    type: { name: String, phone: String },
    required: true,
  })
  user: { name: string; phone: string };

  @Prop({ required: true })
  shop: string;

  @Prop({ type: [{ name: String, price: Number, quantity: Number }], required: true })
  items: { name: string; price: number; quantity: number }[];

  @Prop({ required: true }) itemsTotal: number;
  @Prop({ required: true }) deliveryCharge: number;
  @Prop({ required: true }) totalAmount: number;

  @Prop({
    type: { name: String, phone: String, line1: String, line2: String },
    required: true,
  })
  address: { name: string; phone: string; line1: string; line2: string };

  @Prop({ default: 'cash' }) paymentMethod: string;
  @Prop({ default: 'pending', enum: ['pending', 'delivered', 'cancelled'] })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);