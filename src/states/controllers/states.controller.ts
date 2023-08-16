import { Controller, Get } from '@nestjs/common';
import { StatesService } from '../services/states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get()
  async findAll() {
    return await this.statesService.findAll();
  }

  @Get('poblate')
  async poblate() {
    return this.statesService.poblate();
  }
}
