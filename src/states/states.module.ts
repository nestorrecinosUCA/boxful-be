import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StateRepository } from './repositories';
import { State, StateSchema } from './schemas';
import { StatesService } from './services';
import { StatesController } from './controllers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: State.name, schema: StateSchema }]),
  ],
  controllers: [StatesController],
  providers: [StateRepository, StatesService],
})
export class StatesModule {}
