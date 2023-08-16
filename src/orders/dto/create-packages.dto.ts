import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @ApiProperty({ type: 'number' })
  long: number;

  @ApiProperty({ type: 'number' })
  high: number;

  @ApiProperty({ type: 'number' })
  wide: number;

  @ApiProperty({ type: 'number' })
  poundsWeight: number;

  @ApiProperty({ type: 'string' })
  content: string;
}
