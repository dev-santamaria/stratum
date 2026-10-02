import { Hono } from "hono";
import { handle } from "hono/vercel";
import { app as apiRouter } from "@repo/api";

// Mount the Hono API under Next.js /api base path
const app = new Hono().basePath("/api").route("/", apiRouter);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app);
