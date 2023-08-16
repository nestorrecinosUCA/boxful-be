import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { City } from '../types';

export type StateDocument = HydratedDocument<State>;
@Schema()
export class State {
  @Prop()
  name: string;

  @Prop()
  cities: City[];
}

export const StateSchema = SchemaFactory.createForClass(State);
