import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { StatesService } from '../services';

@ApiTags('States')
@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @ApiOperation({
    description: 'Find all states',
    summary: 'Use it to find all states',
  })
  @Get()
  async findAll() {
    return await this.statesService.findAll();
  }

  @ApiOperation({
    description: 'Poblate states',
    summary: 'Use it to seed states',
  })
  @Get('poblate')
  async poblate() {
    return this.statesService.poblate();
  }
}
