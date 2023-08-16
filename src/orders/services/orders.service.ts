import { Injectable, NotFoundException } from '@nestjs/common';

import { StatesService } from '@States/services';
import { CollectionPoint } from '@States/types';

import { CreateOrderDto } from '../dto';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrdersService {
  constructor(
    private readonly stateService: StatesService,
    private readonly orderRepository: OrderRepository,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<string> {
    const { state, city, collectingAddres } = createOrderDto;
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
    const collectionPoints = await this.stateService.findCollectionPoints();
    const existingCollectionPoints = collectionPoints.find(
      (collectingPoint: CollectionPoint) =>
        collectingPoint.address === collectingAddres,
    );
    if (!existingCollectionPoints) {
      throw new NotFoundException(
        `The collecting address ${collectingAddres} was not found`,
      );
    }
    const savedOrder = await this.orderRepository.save(createOrderDto);

    return `The order for ${savedOrder.names} ${savedOrder.lastnames} was successfully saved`;
  }
}
