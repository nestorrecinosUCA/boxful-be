import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { PackageType } from '../types';
import { CreatePackageDto } from '../dto';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @ApiProperty({ type: 'string' })
  @Prop()
  collectingAddres: string;

  @ApiProperty({ type: Date })
  @Prop({ type: Date })
  date: Date;

  @ApiProperty({ type: 'string' })
  @Prop()
  names: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  lastnames: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  email: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  userAddres: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  state: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  city: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  reference: string;

  @ApiProperty({ type: 'string' })
  @Prop()
  indications: string;

  @ApiProperty({ type: [CreatePackageDto] })
  @Prop()
  packages: PackageType[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
