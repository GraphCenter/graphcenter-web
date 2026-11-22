import type { IncomingMessage, ServerResponse } from 'http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { configureApp } from '../src/setup';

/**
 * Vercel entry point. vercel.json routes `/_/backend/*` here with the prefix
 * removed. The Nest app is built once per warm instance and reused; the
 * in-flight promise is cached so concurrent cold requests share one build.
 * (Pointing Vercel at src/main.ts, which starts a listening server, shipped a
 * bundle without its Nest dependencies.)
 */
type Handler = (req: IncomingMessage, res: ServerResponse) => void;
const ROUTE_PREFIX = '/_/backend';
let handlerPromise: Promise<Handler> | undefined;

async function createHandler(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  configureApp(app);
  await app.init();
  return app.getHttpAdapter().getInstance() as Handler;
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (!handlerPromise) {
    handlerPromise = createHandler().catch((err) => {
      handlerPromise = undefined;
      throw err;
    });
  }
  const instance = await handlerPromise;
  // The site routes `/_/backend/*` here; the app's own routes start at `/`.
  // Done here rather than trusting the service's path transform, which the
  // first deployment showed was not applied.
  if (req.url?.startsWith(ROUTE_PREFIX)) req.url = req.url.slice(ROUTE_PREFIX.length) || '/';
  instance(req, res);
}
