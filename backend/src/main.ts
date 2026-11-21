import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * The form posts to `/_/backend/contacts` on the site's own origin (see
 * vercel.json), so no other site needs to call this. CORS used to allow every
 * origin; now only those in CORS_ORIGINS (comma separated) are allowed, and
 * none when it is unset.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const http = app.getHttpAdapter().getInstance();
  if (typeof http?.disable === 'function') http.disable('x-powered-by');
  const origins = (process.env.CORS_ORIGINS ?? '').split(',').map((o) => o.trim()).filter((o) => o && o !== '*');
  app.enableCors({ origin: origins.length ? origins : false });
  await app.listen(process.env.PORT ?? 3001);
  console.log(`Backend is running on: ${await app.getUrl()}`);
}
bootstrap();
