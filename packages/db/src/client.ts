import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Cache client across hot-reloads in development
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const connectionString =
  process.env.DATABASE_URL ||
  process.env.DIRECT_URL ||
  "postgresql://postgres:postgres@localhost:5432/stratum";

// For Supabase transaction pooling (Supavisor / PgBouncer port 6543),
// prepared statements must be disabled (prepare: false).
const isPooler = connectionString.includes("6543") || connectionString.includes("pgbouncer=true");

export const conn =
  globalForDb.conn ??
  postgres(connectionString, {
    prepare: !isPooler,
    max: process.env.NODE_ENV === "production" ? 20 : 5,
    idle_timeout: 20,
    connect_timeout: 10,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.conn = conn;
}

export const db = drizzle(conn, { schema });
export type Database = typeof db;
