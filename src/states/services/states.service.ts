import { ConflictException, Injectable } from '@nestjs/common';
import * as fs from 'fs';

import { StateRepository } from '../repositories';

@Injectable()
export class StatesService {
  constructor(private readonly stateRepository: StateRepository) {}

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
}
