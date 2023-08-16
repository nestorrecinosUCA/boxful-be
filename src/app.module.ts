import { Module } from '@nestjs/common';

import { ConfigModuleOptions } from '@Config/module';
import { MongoConnection } from '@Config/database';
import { StatesModule } from '@States/states.module';
import { OrdersModule } from '@Orders/orders.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModuleOptions, MongoConnection, StatesModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
