import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModuleOptions } from '@Config/module';
import { MongoConnection } from '@Config/database';
import { StatesModule } from './states/states.module';

@Module({
  imports: [ConfigModuleOptions, MongoConnection, StatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
