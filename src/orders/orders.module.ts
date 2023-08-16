import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StatesModule } from '@States/states.module';

import { Order, OrderSchema } from './schemas';
import { OrdersController } from './controllers';
import { OrdersService } from './services';

@Module({
  imports: [
    StatesModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule { }
