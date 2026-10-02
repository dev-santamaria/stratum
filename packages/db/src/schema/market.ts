import {
  pgTable,
  text,
  varchar,
  boolean,
  timestamp,
  numeric,
  integer,
  jsonb,
  uuid,
  index,
} from "drizzle-orm/pg-core";
import { organizations, users } from "./core";
import { countries, currencies } from "./geo";

/**
 * Tested Products (Pillar 4: Digital Market as Commercialisation Testbed)
 * Products that have completed STRATUM product testing and are entering commercial validation
 */
export const testedProducts = pgTable(
  "tested_products",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    originCountryId: uuid("origin_country_id")
      .references(() => countries.id)
      .notNull(),
    name: text("name").notNull(),
    brand: text("brand").notNull(),
    category: text("category").notNull(), // 'FOOD_BEVERAGE', 'BEAUTY_PERSONAL_CARE', 'CONSUMER_HEALTH', 'ELECTRONICS'
    formulationDescription: text("formulation_description"),
    packagingType: text("packaging_type"), // e.g. 'Biodegradable Pouch', 'Glass Bottle'
    testingScoreSummary: jsonb("testing_score_summary")
      .$type<{
        overallAppeal: number;
        purchaseIntentPct: number;
        sensoryScore: number;
        priceElasticityIndex: number;
      }>()
      .default({
        overallAppeal: 0,
        purchaseIntentPct: 0,
        sensoryScore: 0,
        priceElasticityIndex: 0,
      }),
    status: text("status").default("IN_TESTING").notNull(), // 'IN_TESTING', 'TESTING_PASSED', 'MARKET_LISTED', 'GRADUATED_TO_INTERMEDIATION'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_tested_products_org").on(table.organizationId),
    index("idx_tested_products_status").on(table.status),
    index("idx_tested_products_category").on(table.category),
  ]
);

/**
 * Market Listings
 * Active live SKU listings on the Stratum Digital Market testbed
 */
export const marketListings = pgTable(
  "market_listings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    testedProductId: uuid("tested_product_id")
      .references(() => testedProducts.id, { onDelete: "cascade" })
      .notNull(),
    targetCountryId: uuid("target_country_id")
      .references(() => countries.id)
      .notNull(),
    currencyCode: varchar("currency_code", { length: 3 })
      .references(() => currencies.code)
      .notNull(),
    unitPrice: numeric("unit_price", { precision: 12, scale: 2 }).notNull(),
    inventoryAvailable: integer("inventory_available").default(0).notNull(),
    status: text("status").default("ACTIVE").notNull(), // 'ACTIVE', 'OUT_OF_STOCK', 'VALIDATION_PAUSED', 'GRADUATED'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_market_listings_product").on(table.testedProductId),
    index("idx_market_listings_country").on(table.targetCountryId),
  ]
);

/**
 * Commercialization Orders
 * Real consumer purchases in test markets tracking velocity and repeat intent
 */
export const commercializationOrders = pgTable(
  "commercialization_orders",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    buyerUserId: text("buyer_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    destinationCountryId: uuid("destination_country_id")
      .references(() => countries.id)
      .notNull(),
    totalAmount: numeric("total_amount", { precision: 12, scale: 2 }).notNull(),
    currencyCode: varchar("currency_code", { length: 3 })
      .references(() => currencies.code)
      .notNull(),
    paymentStatus: text("payment_status").default("PENDING").notNull(), // 'PENDING', 'PAID', 'REFUNDED'
    fulfillmentStatus: text("fulfillment_status")
      .default("PROCESSING")
      .notNull(), // 'PROCESSING', 'DISPATCHED', 'DELIVERED'
    isRepeatCustomer: boolean("is_repeat_customer").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_orders_country").on(table.destinationCountryId),
    index("idx_orders_payment").on(table.paymentStatus),
  ]
);

/**
 * Commercialization Order Items
 * Line items for testbed purchases
 */
export const commercializationOrderItems = pgTable(
  "commercialization_order_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderId: uuid("order_id")
      .references(() => commercializationOrders.id, { onDelete: "cascade" })
      .notNull(),
    listingId: uuid("listing_id")
      .references(() => marketListings.id, { onDelete: "cascade" })
      .notNull(),
    quantity: integer("quantity").notNull(),
    unitPrice: numeric("unit_price", { precision: 12, scale: 2 }).notNull(),
  },
  (table) => [
    index("idx_order_items_order").on(table.orderId),
    index("idx_order_items_listing").on(table.listingId),
  ]
);

/**
 * Commercialization Metrics (Flywheel Engine)
 * Synthesizes real-world market traction and feeds live data back into the Intelligence Graph
 */
export const commercializationMetrics = pgTable(
  "commercialization_metrics",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    testedProductId: uuid("tested_product_id")
      .references(() => testedProducts.id, { onDelete: "cascade" })
      .notNull(),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    period: text("period").notNull(), // e.g. 'WEEK_1', 'WEEK_4', 'MONTH_3'
    unitsSold: integer("units_sold").default(0).notNull(),
    reorderRatePct: numeric("reorder_rate_pct", { precision: 5, scale: 2 })
      .default("0.00")
      .notNull(),
    averageRating: numeric("average_rating", { precision: 3, scale: 2 }),
    flywheelSignals: jsonb("flywheel_signals")
      .$type<Record<string, unknown>>()
      .default({}), // Live commercial signals pushed to Intelligence Graph
    generatedAt: timestamp("generated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_commercial_metrics_product").on(table.testedProductId),
    index("idx_commercial_metrics_country").on(table.countryId),
  ]
);
