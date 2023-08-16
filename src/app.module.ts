import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModuleOptions } from '@Config/module';

@Module({
  imports: [ConfigModuleOptions],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
