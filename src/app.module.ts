import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/chatpoint'),
    AuthModule,
    OrdersModule,
    ShopsModule,
  ],
})
export class AppModule {}