/* Build for Vercel (run as `vercel-build` by the @vercel/node builder).
 *
 * The contact form's database. Locally it is SQLite (prisma/schema.prisma,
 * DATABASE_URL=file:./dev.db). On Vercel the filesystem is read-only, so a
 * deployment uses Postgres (Neon through the Vercel integration):
 *
 *  1. derive prisma/postgres/schema.prisma from the SQLite schema (one source);
 *  2. generate the Prisma client for whichever database DATABASE_URL names
 *     (the client was never generated on Vercel, one reason the form answered 500);
 *  3. on Postgres, `prisma db push`: creates the Contact table if missing and
 *     refuses any change that would lose data.
 */
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const run = (cmd) => execSync(cmd, { cwd: root, stdio: 'inherit', env: process.env });
const url = process.env.DATABASE_URL ?? '';

if (/^postgres(ql)?:\/\//.test(url)) {
  // Neon's integration provides an unpooled URL for schema changes.
  process.env.DATABASE_URL_UNPOOLED ||= process.env.POSTGRES_URL_NON_POOLING || url;
  const source = readFileSync(join(root, 'prisma', 'schema.prisma'), 'utf8');
  const schema = source
    .replace(/provider\s*=\s*"sqlite"/, 'provider  = "postgresql"')
    .replace(/url\s*=\s*env\("DATABASE_URL"\)/, 'url       = env("DATABASE_URL")\n  directUrl = env("DATABASE_URL_UNPOOLED")');
  if (!schema.includes('provider  = "postgresql"') || !schema.includes('directUrl')) {
    throw new Error('Could not derive the Postgres schema from prisma/schema.prisma.');
  }
  mkdirSync(join(root, 'prisma', 'postgres'), { recursive: true });
  writeFileSync(join(root, 'prisma', 'postgres', 'schema.prisma'), schema);
  const S = '--schema prisma/postgres/schema.prisma';
  run(`npx prisma generate ${S}`);
  run(`npx prisma db push ${S} --skip-generate`);
} else if (process.env.VERCEL) {
  // A deployment without a database: the form can't store anything. Fail the
  // build rather than ship a backend that answers every submission with 500.
  throw new Error('DATABASE_URL must be a Postgres connection string on Vercel (connect a Neon database to this project).');
} else {
  run('npx prisma generate');
}
