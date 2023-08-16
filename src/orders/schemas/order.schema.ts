import { PackageType } from '@Orders/types';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

export class Order {
  @Prop()
  collectingAddres: string;

  @Prop()
  date: Date;

  @Prop()
  names: string;

  @Prop()
  lastnames: string;

  @Prop()
  email: string;

  @Prop()
  userAddres: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  reference: string;

  @Prop()
  indications: string;

  @Prop()
  packages: PackageType[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
