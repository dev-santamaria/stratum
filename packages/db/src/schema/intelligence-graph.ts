import {
  pgTable,
  text,
  boolean,
  timestamp,
  numeric,
  jsonb,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./core";
import { countries } from "./geo";

/**
 * Graph Nodes (Pillar 1: The Intelligence Graph)
 * Entities representing consumer segments, behaviors, brands, products, packaging, and regulations
 */
export const graphNodes = pgTable(
  "graph_nodes",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    entityType: text("entity_type").notNull(), // 'CONSUMER_SEGMENT', 'BEHAVIOR', 'MOTIVATION', 'BRAND', 'COMPETITOR', 'PRODUCT_FORMULATION', 'PACKAGING', 'DISTRIBUTOR', 'REGULATION', 'OPPORTUNITY'
    label: text("label").notNull(), // e.g. 'Gen-Z Ready-To-Drink Tea Consumers', 'Recyclable Tetrapak Packaging'
    countryId: uuid("country_id").references(() => countries.id), // Nullable for global/regional nodes
    properties: jsonb("properties").$type<Record<string, unknown>>().default({}),
    vectorEmbeddingId: text("vector_embedding_id"), // Connects to pgvector or vector index for semantic queries
    firstObservedAt: timestamp("first_observed_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    lastObservedAt: timestamp("last_observed_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_graph_nodes_type").on(table.entityType),
    index("idx_graph_nodes_country").on(table.countryId),
    index("idx_graph_nodes_label").on(table.label),
  ]
);

/**
 * Graph Edges
 * Relationships connecting nodes with probabilistic confidence and provenance evidence
 */
export const graphEdges = pgTable(
  "graph_edges",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    sourceNodeId: uuid("source_node_id")
      .references(() => graphNodes.id, { onDelete: "cascade" })
      .notNull(),
    targetNodeId: uuid("target_node_id")
      .references(() => graphNodes.id, { onDelete: "cascade" })
      .notNull(),
    relationshipType: text("relationship_type").notNull(), // 'BUYS', 'PREFERS', 'INFLUENCES', 'COMPETES_WITH', 'DISTRIBUTES', 'REGULATES', 'DRIVES_OPPORTUNITY'
    weight: numeric("weight", { precision: 8, scale: 4 }).default("1.0000").notNull(), // Frequency or affinity score
    confidenceScore: numeric("confidence_score", { precision: 5, scale: 4 })
      .default("1.0000")
      .notNull(), // Calibration confidence (0.0000 to 1.0000)
    evidenceSources: jsonb("evidence_sources")
      .$type<Array<{ type: string; id: string; timestamp: string }>>()
      .default([]), // Links to surveyResponseIds, fieldSubmissions, etc.
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_graph_edges_source").on(table.sourceNodeId),
    index("idx_graph_edges_target").on(table.targetNodeId),
    index("idx_graph_edges_type").on(table.relationshipType),
    uniqueIndex("idx_graph_edges_unique_rel").on(
      table.sourceNodeId,
      table.targetNodeId,
      table.relationshipType
    ),
  ]
);

/**
 * Market Signals
 * Always-on, real-time pulse data (commerce telemetry, pricing shifts, consumer sentiment changes)
 */
export const marketSignals = pgTable(
  "market_signals",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    sector: text("sector").notNull(), // 'FMCG', 'FINTECH', 'ENERGY', 'HEALTHCARE', 'RETAIL'
    signalType: text("signal_type").notNull(), // 'LIVE_COMMERCE', 'PRICING_SHIFT', 'CONSUMER_SENTIMENT', 'SUPPLY_CHAIN', 'REGULATORY_CHANGE'
    headline: text("headline").notNull(),
    summary: text("summary").notNull(),
    sentimentScore: numeric("sentiment_score", { precision: 4, scale: 2 }), // -1.00 to +1.00
    confidenceScore: numeric("confidence_score", { precision: 4, scale: 2 })
      .default("0.90")
      .notNull(),
    detectedAt: timestamp("detected_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
  },
  (table) => [
    index("idx_signals_country_sector").on(table.countryId, table.sector),
    index("idx_signals_type").on(table.signalType),
    index("idx_signals_detected").on(table.detectedAt),
  ]
);

/**
 * Market Insights
 * Decision-grade syntheses replacing traditional static PDF reports with interactive, queryable insights
 */
export const marketInsights = pgTable(
  "market_insights",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id").references(() => organizations.id, {
      onDelete: "set null",
    }), // Nullable = syndicated/public STRATUM insight, Set = exclusive bespoke client insight
    countryId: uuid("country_id").references(() => countries.id),
    title: text("title").notNull(),
    slug: text("slug").unique().notNull(),
    category: text("category").notNull(), // 'MARKET_ENTRY', 'CONSUMER_TREND', 'COMPETITIVE_LANDSCAPE', 'DISTRIBUTION'
    keyFindings: jsonb("key_findings").$type<string[]>().default([]),
    recommendedActions: jsonb("recommended_actions").$type<string[]>().default([]),
    associatedNodeIds: jsonb("associated_node_ids").$type<string[]>().default([]),
    isPublic: boolean("is_public").default(false).notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_insights_org").on(table.organizationId),
    index("idx_insights_country").on(table.countryId),
    index("idx_insights_category").on(table.category),
  ]
);
