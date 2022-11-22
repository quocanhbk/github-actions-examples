import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000, () =>
    Logger.log(
      `Listening at http://localhost:${process.env.PORT || 3000}`,
      'Bootstrap',
    ),
  );
}
bootstrap();
