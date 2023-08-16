import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModuleOptions } from '@Config/module';
import { MongoConnection } from '@Config/database';

@Module({
  imports: [ConfigModuleOptions, MongoConnection],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
