import { ApiProperty } from '@nestjs/swagger';

export class CreateStateDto {
  @ApiProperty()
  state: number;
}
