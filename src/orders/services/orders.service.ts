import { Injectable, NotFoundException } from '@nestjs/common';

import { StatesService } from '@States/services';

import { CreateOrderDto } from '../dto';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrdersService {
  constructor(
    private readonly stateService: StatesService,
    private readonly orderRepository: OrderRepository,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<string> {
    const { state, city } = createOrderDto;
    const existingState = await this.stateService.findOneByName(state);
    const { cities } = existingState;
    const existingCity = cities.find(
      (existingCity) => existingCity.name === city,
    );

    if (!existingCity) {
      throw new NotFoundException(
        `The City ${city} was not found in ${state} state`,
      );
    }

    const savedOrder = await this.orderRepository.save(createOrderDto);

    return `The order for ${savedOrder.names} ${savedOrder.lastnames} was successfully saved`;
  }
}
