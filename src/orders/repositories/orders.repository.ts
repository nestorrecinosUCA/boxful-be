import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from '../schemas';
import { CreateOrderDto } from '../dto';

export class OrderRepository {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) { }
  async save(createOrderDto: CreateOrderDto): Promise<Order> {
    const createOrder = this.orderModel.create(createOrderDto);
    const savedOrder = (await createOrder).save();
    return savedOrder;
  }
}
