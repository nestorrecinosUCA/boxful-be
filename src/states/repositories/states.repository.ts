import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { State } from '@States/entities';

export class StateRepository {
  constructor(@InjectModel(State.name) private stateModel: Model<State>) {}

  async findAll(): Promise<State[]> {
    return await this.stateModel.find().exec();
  }

  async save(state: State) {
    const createState = this.stateModel.create(state);
    const savedState = (await createState).save();
    return savedState;
  }
}
