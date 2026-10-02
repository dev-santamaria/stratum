import { Hono } from "hono";

export const healthRouter = new Hono().get("/", (c) => {
  return c.json({
    status: "healthy",
    platform: "STRATUM Global Market Intelligence & Intermediation Platform",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});
