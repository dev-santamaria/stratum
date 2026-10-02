import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { healthRouter } from "./routes/health";
import { geoRouter } from "./routes/geo";
import { intelligenceRouter } from "./routes/intelligence";
import { dealRoomRouter } from "./routes/deal-room";
import { marketRouter } from "./routes/market";

const apiRouter = new Hono()
  .route("/health", healthRouter)
  .route("/geo", geoRouter)
  .route("/intelligence", intelligenceRouter)
  .route("/deal-room", dealRoomRouter)
  .route("/market", marketRouter);

export const app = new Hono()
  .use("*", logger())
  .use("*", prettyJSON())
  .use(
    "*",
    cors({
      origin: (origin) => origin || "*",
      allowHeaders: ["Content-Type", "Authorization", "x-stratum-key"],
      allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
      maxAge: 600,
      credentials: true,
    })
  )
  .route("/", apiRouter)
  .route("/api", apiRouter);

export type AppType = typeof apiRouter;
export default app;
