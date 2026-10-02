import { Hono } from "hono";
import { db, testedProducts, marketListings } from "@repo/db";
import { eq } from "drizzle-orm";

export const marketRouter = new Hono()
  .get("/products", async (c) => {
    try {
      const products = await db
        .select()
        .from(testedProducts)
        .where(eq(testedProducts.status, "MARKET_LISTED"))
        .limit(20);
      return c.json({ data: products });
    } catch {
      return c.json({
        data: [
          {
            id: "prod-1",
            name: "Zobo Zing Organic Energy Infusion",
            brand: "AfriBotanicals",
            category: "FOOD_BEVERAGE",
            status: "MARKET_LISTED",
            testingScoreSummary: {
              overallAppeal: 8.9,
              purchaseIntentPct: 84,
              sensoryScore: 9.2,
            },
          },
        ],
      });
    }
  })
  .get("/listings", async (c) => {
    try {
      const listings = await db
        .select()
        .from(marketListings)
        .where(eq(marketListings.status, "ACTIVE"))
        .limit(20);
      return c.json({ data: listings });
    } catch {
      return c.json({
        data: [
          {
            id: "list-1",
            unitPrice: "4.50",
            currencyCode: "USD",
            inventoryAvailable: 2400,
            status: "ACTIVE",
          },
        ],
      });
    }
  });
