import { hc } from "hono/client";
import type { AppType } from "./index";

/**
 * Creates an end-to-end type-safe Hono RPC client.
 * Usable inside Next.js Server Components, Client Components, or external microservices.
 */
export const createApiClient = (
  baseUrl: string = process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}/api`
    : "http://localhost:3000/api"
) => {
  return hc<AppType>(baseUrl);
};

export type ApiClient = ReturnType<typeof createApiClient>;
