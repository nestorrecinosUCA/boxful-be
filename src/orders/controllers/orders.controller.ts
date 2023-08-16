import { Controller, Post, Body } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';

import { OrdersService } from '../services';
import { CreateOrderDto } from '../dto';
import { Order } from '../schemas';

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
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }
}
