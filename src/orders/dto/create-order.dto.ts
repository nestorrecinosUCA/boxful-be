import { ApiProperty } from '@nestjs/swagger';

import { CreatePackageDto } from './';
import { IsEmail, IsString } from 'class-validator';
export class CreateOrderDto {
  @IsString()
  @ApiProperty()
  collectingAddress: string;

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
  userAddress: string;

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

  @IsString()
  @ApiProperty()
  phone: string;

  @ApiProperty()
  packages: CreatePackageDto[];
}
