import { Injectable } from '@nestjs/common';

import { CreateStateDto } from '../dto/create-state.dto';
import { UpdateStateDto } from '../dto/update-state.dto';
import { StateRepository } from '../repositories';

@Injectable()
export class StatesService {
  constructor(private readonly stateRepository: StateRepository) { }
  create(createStateDto: CreateStateDto) {
    return 'This action adds a new state';
  }

  async findAll() {
    return await this.stateRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
