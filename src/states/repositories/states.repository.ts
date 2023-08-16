import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { State } from '../schemas';

export class StateRepository {
  constructor(@InjectModel(State.name) private stateModel: Model<State>) {}

  async findAll(): Promise<State[]> {
    return await this.stateModel.find().exec();
  }

  async findOneByName(name: string): Promise<State> {
    return await this.stateModel.findOne({ name }).exec();
  }

  async save(state: State) {
    const createState = this.stateModel.create(state);
    const savedState = (await createState).save();
    return savedState;
  }
}
