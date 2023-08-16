import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreatePackageDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({ type: 'number' })
  long: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ type: 'number' })
  high: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ type: 'number' })
  wide: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ type: 'number' })
  poundsWeight: number;

  @ApiProperty({ type: 'string' })
  content: string;
}
