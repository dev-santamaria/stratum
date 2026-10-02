import {
  pgTable,
  text,
  varchar,
  boolean,
  timestamp,
  numeric,
  jsonb,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * Currencies
 * Standard ISO-4217 currencies with real-time exchange rates against USD
 */
export const currencies = pgTable("currencies", {
  code: varchar("code", { length: 3 }).primaryKey(), // e.g. 'USD', 'NGN', 'KES', 'ZAR'
  name: text("name").notNull(),
  symbol: varchar("symbol", { length: 10 }).notNull(),
  exchangeRateToUsd: numeric("exchange_rate_to_usd", { precision: 18, scale: 6 })
    .default("1.000000")
    .notNull(),
  isBase: boolean("is_base").default(false).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

/**
 * Countries
 * Emerging and global markets where STRATUM operates
 */
export const countries = pgTable(
  "countries",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    code: varchar("code", { length: 3 }).unique().notNull(), // ISO-3166-1 alpha-3, e.g. 'NGA', 'KEN', 'ZAF'
    iso2: varchar("iso2", { length: 2 }).unique().notNull(), // ISO-3166-1 alpha-2, e.g. 'NG', 'KE', 'ZA'
    name: text("name").notNull(),
    capital: text("capital"),
    region: text("region").notNull(), // e.g. 'Sub-Saharan Africa', 'Southeast Asia', 'MENA'
    subregion: text("subregion"), // e.g. 'West Africa', 'East Africa'
    defaultCurrencyCode: varchar("default_currency_code", { length: 3 })
      .references(() => currencies.code)
      .notNull(),
    phoneCode: varchar("phone_code", { length: 10 }), // e.g. '+234', '+254'
    economicBlocs: jsonb("economic_blocs").$type<string[]>().default([]), // e.g. ['ECOWAS', 'AfCFTA']
    riskRating: numeric("risk_rating", { precision: 4, scale: 2 }).default("0.00"), // Operational/political risk index
    isActive: boolean("is_active").default(true).notNull(),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_countries_region").on(table.region),
    index("idx_countries_active").on(table.isActive),
  ]
);

/**
 * Subnational Regions (States, Provinces, Counties)
 * Enables hyper-local field research and distributor territory tracking
 */
export const regions = pgTable(
  "regions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    countryId: uuid("country_id")
      .references(() => countries.id, { onDelete: "cascade" })
      .notNull(),
    name: text("name").notNull(), // e.g. 'Lagos', 'Nairobi County', 'Gauteng'
    code: varchar("code", { length: 20 }), // e.g. 'NG-LA'
    type: text("type").notNull(), // 'STATE', 'PROVINCE', 'COUNTY', 'DISTRICT'
    coordinates: jsonb("coordinates").$type<{ lat: number; lng: number }>(),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_regions_country").on(table.countryId),
    uniqueIndex("idx_regions_country_code").on(table.countryId, table.code),
  ]
);

/**
 * Regulatory Jurisdictions & Data Compliance
 * Enforces local data residency (e.g. NDPR Nigeria, POPIA South Africa, GDPR Europe)
 */
export const regulatoryJurisdictions = pgTable(
  "regulatory_jurisdictions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    countryId: uuid("country_id")
      .references(() => countries.id, { onDelete: "cascade" })
      .notNull(),
    frameworkName: text("framework_name").notNull(), // e.g. 'NDPR', 'POPIA', 'GDPR'
    dataResidencyMandatory: boolean("data_residency_mandatory")
      .default(false)
      .notNull(),
    crossBorderTransferRestricted: boolean("cross_border_transfer_restricted")
      .default(false)
      .notNull(),
    minConsentAge: varchar("min_consent_age", { length: 5 }).default("18"),
    complianceNotes: text("compliance_notes"),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_regulatory_country").on(table.countryId),
  ]
);
