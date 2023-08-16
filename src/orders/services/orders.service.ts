import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateOrderDto } from '../dto';
import { StatesService } from '@States/services';

@Injectable()
export class OrdersService {
  constructor(private readonly stateService: StatesService) { }
  async create(createOrderDto: CreateOrderDto): Promise<string> {
    const { state, city } = createOrderDto;
    const existingState = await this.stateService.findOneByName(state);
    const { cities } = existingState;
    const existingCity = cities.includes({ name: city });
    if (!existingCity) {
      throw new NotFoundException(
        `The City ${city} was not found in ${state} state`,
      );
    }

    return 'This action adds a new order';
  }
}
