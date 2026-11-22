import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureApp } from './setup';

// Local development server. On Vercel the app runs through api/index.ts.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureApp(app);
  await app.listen(process.env.PORT ?? 3001);
  console.log(`Backend is running on: ${await app.getUrl()}`);
}
bootstrap();
