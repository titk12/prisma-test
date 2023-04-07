import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { seedDb } from './seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await seedDb();

  await app.listen(3000);
}
bootstrap();
