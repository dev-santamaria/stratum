import { Hono } from "hono";
import { db, dealOpportunities, distributorProfiles } from "@repo/db";
import { desc, eq } from "drizzle-orm";

export const dealRoomRouter = new Hono()
  .get("/opportunities", async (c) => {
    try {
      const deals = await db
        .select()
        .from(dealOpportunities)
        .orderBy(desc(dealOpportunities.createdAt))
        .limit(20);
      return c.json({ data: deals });
    } catch {
      return c.json({
        data: [
          {
            id: "deal-1",
            title: "Cross-Border Distribution: Premium Cold-Chain Beverages to Kenya & Tanzania",
            sector: "FMCG",
            stage: "MATCHMAKING",
            estimatedDealValueUsd: "1500000.00",
            createdAt: new Date().toISOString(),
          },
        ],
      });
    }
  })
  .get("/distributors", async (c) => {
    try {
      const distributors = await db
        .select()
        .from(distributorProfiles)
        .where(eq(distributorProfiles.verificationStatus, "AUDITED"))
        .limit(20);
      return c.json({ data: distributors });
    } catch {
      return c.json({
        data: [
          {
            id: "dist-1",
            coverageRegions: ["Lagos", "Ogun", "Oyo"],
            hasColdChain: true,
            verificationStatus: "AUDITED",
            exclusiveBrandsCount: 4,
          },
        ],
      });
    }
  });
