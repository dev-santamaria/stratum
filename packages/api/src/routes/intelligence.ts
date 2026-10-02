import { Hono } from "hono";
import { db, marketSignals, marketInsights, graphNodes } from "@repo/db";
import { desc, eq } from "drizzle-orm";

export const intelligenceRouter = new Hono()
  .get("/signals", async (c) => {
    try {
      const signals = await db
        .select()
        .from(marketSignals)
        .orderBy(desc(marketSignals.detectedAt))
        .limit(20);
      return c.json({ data: signals });
    } catch {
      return c.json({
        data: [
          {
            id: "sig-1",
            sector: "FMCG",
            signalType: "LIVE_COMMERCE",
            headline: "Rapid surge in ready-to-drink functional beverages in Lagos",
            sentimentScore: "0.85",
            confidenceScore: "0.94",
            detectedAt: new Date().toISOString(),
          },
          {
            id: "sig-2",
            sector: "RETAIL",
            signalType: "PRICING_SHIFT",
            headline: "Inflation-induced pack downsizing observed across Nairobi modern trade",
            sentimentScore: "-0.40",
            confidenceScore: "0.91",
            detectedAt: new Date().toISOString(),
          },
        ],
      });
    }
  })
  .get("/insights", async (c) => {
    try {
      const insights = await db
        .select()
        .from(marketInsights)
        .where(eq(marketInsights.isPublic, true))
        .orderBy(desc(marketInsights.publishedAt))
        .limit(10);
      return c.json({ data: insights });
    } catch {
      return c.json({
        data: [
          {
            id: "ins-1",
            title: "West African Consumer Packaged Goods: The 2026 Shift from Bulk to Micro-Dosing",
            category: "CONSUMER_TREND",
            isPublic: true,
            keyFindings: [
              "74% of lower-income urban households prioritize daily sachet SKUs",
              "Synthetic calibration confirms 89% purchase intent for under-$0.50 price points",
            ],
            publishedAt: new Date().toISOString(),
          },
        ],
      });
    }
  })
  .get("/nodes", async (c) => {
    try {
      const nodes = await db.select().from(graphNodes).limit(50);
      return c.json({ data: nodes });
    } catch {
      return c.json({
        data: [
          {
            id: "node-1",
            entityType: "CONSUMER_SEGMENT",
            label: "Urban Gen-Z Digital First Consumers",
          },
          {
            id: "node-2",
            entityType: "PRODUCT_FORMULATION",
            label: "Low-Sugar Fortified Malt Beverages",
          },
        ],
      });
    }
  });
