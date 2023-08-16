import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { City } from '../types';

export type StateDocument = HydratedDocument<State>;
@Schema()
export class State {
  @ApiProperty({ type: 'string' })
  @Prop()
  name: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  cities: City[];
}

export const StateSchema = SchemaFactory.createForClass(State);
