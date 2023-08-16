import { ApiProperty } from '@nestjs/swagger';

import { CreatePackageDto } from './';
import { IsEmail, IsString } from 'class-validator';
export class CreateOrderDto {
  @IsString()
  @ApiProperty()
  collectingAddres: string;

  @ApiProperty()
  date: Date;

  @IsString()
  @ApiProperty()
  names: string;

  @IsString()
  @ApiProperty()
  lastnames: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  userAddres: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  reference: string;

  @IsString()
  @ApiProperty()
  indications: string;

  @ApiProperty()
  packages: CreatePackageDto[];
}
