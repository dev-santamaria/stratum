import { Hono } from "hono";
import { db, countries, currencies } from "@repo/db";
import { eq } from "drizzle-orm";

export const geoRouter = new Hono()
  .get("/countries", async (c) => {
    try {
      const activeCountries = await db
        .select()
        .from(countries)
        .where(eq(countries.isActive, true));
      return c.json({ data: activeCountries });
    } catch {
      // In development / fallback if database is not yet migrated
      return c.json({
        data: [
          {
            id: "ng-sample-id",
            code: "NGA",
            iso2: "NG",
            name: "Nigeria",
            region: "Sub-Saharan Africa",
            defaultCurrencyCode: "NGN",
            isActive: true,
          },
          {
            id: "ke-sample-id",
            code: "KEN",
            iso2: "KE",
            name: "Kenya",
            region: "Sub-Saharan Africa",
            defaultCurrencyCode: "KES",
            isActive: true,
          },
          {
            id: "za-sample-id",
            code: "ZAF",
            iso2: "ZA",
            name: "South Africa",
            region: "Sub-Saharan Africa",
            defaultCurrencyCode: "ZAR",
            isActive: true,
          },
        ],
      });
    }
  })
  .get("/currencies", async (c) => {
    try {
      const allCurrencies = await db.select().from(currencies);
      return c.json({ data: allCurrencies });
    } catch {
      return c.json({
        data: [
          { code: "USD", name: "US Dollar", symbol: "$", exchangeRateToUsd: "1.000000" },
          { code: "NGN", name: "Nigerian Naira", symbol: "₦", exchangeRateToUsd: "1550.000000" },
          { code: "KES", name: "Kenyan Shilling", symbol: "KSh", exchangeRateToUsd: "129.500000" },
          { code: "ZAR", name: "South African Rand", symbol: "R", exchangeRateToUsd: "18.200000" },
        ],
      });
    }
  });
