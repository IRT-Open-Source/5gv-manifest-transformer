import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3004);
  logger.log('Listening @ 3004');
}
bootstrap();
