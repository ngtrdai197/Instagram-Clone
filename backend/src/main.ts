import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as chalk from 'chalk';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT_SERVER');
  
  await app.listen(PORT);
  Logger.log(
    `🚀  Server is listening on port ${chalk.hex('#87e8de').bold(`${PORT}`)}`,
    'Bootstrap',
  );
}
bootstrap();
