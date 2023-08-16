import { Controller, Post, Body } from '@nestjs/common';

import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dto';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Order } from '@Orders/schemas';

@ApiExtraModels(Order)
@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @ApiOperation({
    description: 'Use it to create a new order',
    summary: 'Create new order',
  })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
}
