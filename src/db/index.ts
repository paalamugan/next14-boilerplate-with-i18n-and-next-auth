import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

import { env } from '@/env';

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { logger: false });

// Disable migrate function if using Edge runtime and use `npm run db:migrate` instead.
// Only run migrate in development. Otherwise, migrate will also be run during the build which can cause errors.
// Migrate during the build can cause errors due to the locked database when multiple migrations are running at the same time.
if (env.DB_MIGRATIONS_ENABLED) {
  migrate(db, { migrationsFolder: './migrations' }).catch(_error => {});
}
