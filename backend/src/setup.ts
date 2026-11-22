import type { INestApplication } from '@nestjs/common';

/**
 * Shared by the local server (main.ts) and the Vercel function (api/index.ts).
 *
 * The form posts to `/_/backend/contacts` on the site's own origin, so no
 * other site needs to call this. CORS used to allow every origin; now only
 * those in CORS_ORIGINS (comma separated) are allowed, and none when unset.
 */
export function configureApp(app: INestApplication) {
  const http = app.getHttpAdapter().getInstance();
  if (typeof http?.disable === 'function') http.disable('x-powered-by');
  const origins = (process.env.CORS_ORIGINS ?? '').split(',').map((o) => o.trim()).filter((o) => o && o !== '*');
  app.enableCors({ origin: origins.length ? origins : false });
}
