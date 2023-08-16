import { ApiProperty } from '@nestjs/swagger';

import { CreatePackageDto } from './';
export class CreateOrderDto {
  @ApiProperty()
  collectingAddres: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  names: string;

  @ApiProperty()
  lastnames: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  userAddres: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  indications: string;

  @ApiProperty()
  packages: CreatePackageDto[];
}
