import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from '@Config/configuration';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Boxful API')
    .setDescription('Technical assessment')
    .setVersion('1.0')
    .addTag('assessment')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument);

  const { port } = configuration();
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
