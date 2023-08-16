import { ConflictException, Injectable } from '@nestjs/common';
import * as fs from 'fs';

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

  async poblate(): Promise<string> {
    const states = fs.readFileSync('src/constants/others/states.json', {
      encoding: 'utf-8',
    });
    const statesJson = JSON.parse(states);
    try {
      for (const state of statesJson) {
        await this.stateRepository.save(state);
      }
      return 'Success!';
    } catch (error) {
      throw new ConflictException('Ups, something happened!');
    }
  }

  async findOne(id: string) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
