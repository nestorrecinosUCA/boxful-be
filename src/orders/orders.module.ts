import { Module } from '@nestjs/common';

import { OrdersService } from './services';
import { OrdersController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from '@Orders/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule { }
