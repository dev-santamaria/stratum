import {
  pgTable,
  text,
  boolean,
  timestamp,
  numeric,
  integer,
  jsonb,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations, users } from "./core";
import { countries } from "./geo";
import { marketInsights } from "./intelligence-graph";

/**
 * Deal Opportunities (Pillar 3: The Deal Room)
 * Market entry and commercialization opportunities surfaced directly from research insights
 */
export const dealOpportunities = pgTable(
  "deal_opportunities",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    ownerOrganizationId: text("owner_organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    targetCountryId: uuid("target_country_id")
      .references(() => countries.id)
      .notNull(),
    sourceInsightId: uuid("source_insight_id").references(
      () => marketInsights.id,
      { onDelete: "set null" }
    ), // The direct bridge: Insight -> Deal
    title: text("title").notNull(), // e.g. 'Distribution Access for Functional Beverages in Nigeria'
    sector: text("sector").notNull(), // 'FMCG', 'HEALTHCARE', 'FINTECH', 'CLEANTECH', 'AGRITECH'
    stage: text("stage").default("DISCOVERY").notNull(), // 'DISCOVERY', 'MATCHMAKING', 'DEAL_ROOM_OPEN', 'TERM_SHEET', 'CLOSED_WON', 'ARCHIVED'
    estimatedDealValueUsd: numeric("estimated_deal_value_usd", {
      precision: 16,
      scale: 2,
    }),
    opportunityDetails: jsonb("opportunity_details")
      .$type<Record<string, unknown>>()
      .default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_deals_owner").on(table.ownerOrganizationId),
    index("idx_deals_country").on(table.targetCountryId),
    index("idx_deals_stage").on(table.stage),
  ]
);

/**
 * Distributor & Partner Profiles
 * Vetted local distributors, logistics partners, and regional brokers across emerging markets
 */
export const distributorProfiles = pgTable(
  "distributor_profiles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    coverageRegions: jsonb("coverage_regions").$type<string[]>().default([]), // List of covered subnational regions
    warehouseCapacitySqFt: integer("warehouse_capacity_sq_ft"),
    hasColdChain: boolean("has_cold_chain").default(false).notNull(),
    annualTurnoverUsd: numeric("annual_turnover_usd", { precision: 16, scale: 2 }),
    exclusiveBrandsCount: integer("exclusive_brands_count").default(0).notNull(),
    verificationStatus: text("verification_status")
      .default("UNVERIFIED")
      .notNull(), // 'UNVERIFIED', 'AUDITED', 'PREMIUM_VERIFIED'
    complianceCertifications: jsonb("compliance_certifications")
      .$type<string[]>()
      .default([]), // e.g. ['NAFDAC_APPROVED', 'ISO_9001', 'WHO_GDP']
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_distributors_country").on(table.countryId),
    index("idx_distributors_org").on(table.organizationId),
  ]
);

/**
 * Matches (AI-Powered Intermediation)
 * Match scores calculated between deal opportunities and vetted regional partners
 */
export const matches = pgTable(
  "matches",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    dealOpportunityId: uuid("deal_opportunity_id")
      .references(() => dealOpportunities.id, { onDelete: "cascade" })
      .notNull(),
    distributorProfileId: uuid("distributor_profile_id")
      .references(() => distributorProfiles.id, { onDelete: "cascade" })
      .notNull(),
    matchScore: numeric("match_score", { precision: 5, scale: 4 }).notNull(), // e.g. 0.9420
    rationale: jsonb("rationale").$type<string[]>().default([]), // Explanatory bullets for the match
    status: text("status").default("AI_SUGGESTED").notNull(), // 'AI_SUGGESTED', 'INTRO_REQUESTED', 'ACCEPTED', 'DECLINED'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_matches_deal").on(table.dealOpportunityId),
    index("idx_matches_distributor").on(table.distributorProfileId),
    uniqueIndex("idx_matches_unique_pair").on(
      table.dealOpportunityId,
      table.distributorProfileId
    ),
  ]
);

/**
 * Deal Rooms
 * Confidential collaboration and transaction environments for closing cross-border partnerships
 */
export const dealRooms = pgTable(
  "deal_rooms",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    dealOpportunityId: uuid("deal_opportunity_id")
      .references(() => dealOpportunities.id, { onDelete: "cascade" })
      .notNull(),
    hostOrganizationId: text("host_organization_id")
      .references(() => organizations.id)
      .notNull(),
    partnerOrganizationId: text("partner_organization_id")
      .references(() => organizations.id)
      .notNull(),
    roomStatus: text("room_status").default("NDA_PENDING").notNull(), // 'NDA_PENDING', 'DUE_DILIGENCE', 'COMMERCIAL_NEGOTIATION', 'EXECUTED', 'CLOSED'
    stratumCommissionPct: numeric("stratum_commission_pct", {
      precision: 4,
      scale: 2,
    }).default("3.00").notNull(), // Intermediation fee
    dealValueUsd: numeric("deal_value_usd", { precision: 16, scale: 2 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_deal_rooms_opportunity").on(table.dealOpportunityId),
    index("idx_deal_rooms_host").on(table.hostOrganizationId),
    index("idx_deal_rooms_partner").on(table.partnerOrganizationId),
  ]
);

/**
 * Deal Room Participants
 * Access permissions, legal representation, and NDA execution timestamps
 */
export const dealRoomParticipants = pgTable(
  "deal_room_participants",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    dealRoomId: uuid("deal_room_id")
      .references(() => dealRooms.id, { onDelete: "cascade" })
      .notNull(),
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    organizationId: text("organization_id")
      .references(() => organizations.id)
      .notNull(),
    role: text("role").default("COMMERCIAL_LEAD").notNull(), // 'ROOM_ADMIN', 'LEGAL_COUNSEL', 'COMMERCIAL_LEAD', 'AUDITOR', 'VIEWER'
    ndaSignedAt: timestamp("nda_signed_at", { withTimezone: true }),
    joinedAt: timestamp("joined_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("idx_deal_participants_room_user").on(
      table.dealRoomId,
      table.userId
    ),
  ]
);

/**
 * Deal Documents
 * Secure document vault (NDAs, financial audits, licensing, term sheets)
 */
export const dealDocuments = pgTable(
  "deal_documents",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    dealRoomId: uuid("deal_room_id")
      .references(() => dealRooms.id, { onDelete: "cascade" })
      .notNull(),
    uploaderId: text("uploader_id")
      .references(() => users.id)
      .notNull(),
    title: text("title").notNull(),
    category: text("category").notNull(), // 'MUTUAL_NDA', 'FINANCIALS', 'REGULATORY_APPROVAL', 'DISTRIBUTION_AGREEMENT', 'TERM_SHEET'
    fileUrl: text("file_url").notNull(), // Supabase Storage encrypted path
    fileSizeBytes: integer("file_size_bytes"),
    isConfidential: boolean("is_confidential").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_deal_docs_room").on(table.dealRoomId),
  ]
);
