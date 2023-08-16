import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StateSchema } from 'src/states/entities/state.entity';
import { StatesService } from './services';
import { StatesController } from './controllers';
import { StateRepository } from '@States/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: State.name, schema: StateSchema }]),
  ],
  controllers: [StatesController],
  providers: [StateRepository, StatesService],
})
export class StatesModule {}
