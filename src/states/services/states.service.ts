import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';

import { StateRepository } from '../repositories';
import { State } from '../schemas';

@Injectable()
export class StatesService {
  constructor(private readonly stateRepository: StateRepository) {}

  async findAll(): Promise<State[]> {
    return await this.stateRepository.findAll();
  }

  async poblate(): Promise<string> {
    const states = fs.readFileSync('src/constants/others/states.json', {
      encoding: 'utf-8',
    });
    const statesJson = JSON.parse(states);
    const allStates = await this.findAll();
    const allStatesStringArray = allStates.map((state) => state.name);

    const duplicatedStates = statesJson.filter((state: State) =>
      allStatesStringArray.includes(state.name),
    );

    if (duplicatedStates.length > 0) {
      throw new BadRequestException('The states already exists on database');
    }

    try {
      for (const state of statesJson) {
        await this.stateRepository.save(state);
      }
      return 'Success!';
    } catch (error) {
      throw new BadRequestException('Ups, something happened!');
    }
  }
}
