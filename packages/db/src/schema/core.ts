import {
  pgTable,
  text,
  varchar,
  boolean,
  timestamp,
  integer,
  jsonb,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { countries } from "./geo";

/**
 * Users
 * Central identity table compatible with Better Auth + custom STRATUM platform fields
 */
export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey(), // Better Auth standard text ID (cuid / nanoid / uuid)
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    phoneNumber: varchar("phone_number", { length: 30 }),
    countryId: uuid("country_id").references(() => countries.id),
    systemRole: text("system_role")
      .default("USER")
      .notNull(), // 'SUPER_ADMIN', 'PLATFORM_OPERATOR', 'USER'
    status: text("status").default("ACTIVE").notNull(), // 'ACTIVE', 'SUSPENDED', 'PENDING'
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_users_email").on(table.email),
    index("idx_users_country").on(table.countryId),
    index("idx_users_status").on(table.status),
  ]
);

/**
 * Sessions
 * Better Auth active session store
 */
export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    token: text("token").unique().notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    activeOrganizationId: text("active_organization_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_sessions_user").on(table.userId),
    index("idx_sessions_token").on(table.token),
  ]
);

/**
 * Accounts
 * Better Auth OAuth credentials and password hash table
 */
export const accounts = pgTable(
  "accounts",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(), // 'credential', 'google', 'microsoft', etc.
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", {
      withTimezone: true,
    }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
      withTimezone: true,
    }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_accounts_user").on(table.userId),
    uniqueIndex("idx_accounts_provider_account").on(
      table.providerId,
      table.accountId
    ),
  ]
);

/**
 * Verifications
 * Better Auth magic link, email verification, and password reset tokens
 */
export const verifications = pgTable(
  "verifications",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(), // Email or phone number
    value: text("value").notNull(), // Token or OTP hash
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_verifications_identifier").on(table.identifier),
  ]
);

/**
 * Organizations (Multi-Tenancy)
 * Enterprises, research firms, institutional investors, and trade agencies using STRATUM
 */
export const organizations = pgTable(
  "organizations",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").unique().notNull(),
    logo: text("logo"),
    tier: text("tier").default("GROWTH").notNull(), // 'ENTERPRISE', 'GROWTH', 'STARTUP', 'RESEARCH_PARTNER'
    industry: text("industry"), // 'FMCG', 'FINTECH', 'ENERGY', 'PHARMA', 'AGRITECH'
    headquartersCountryId: uuid("headquarters_country_id").references(
      () => countries.id
    ),
    billingEmail: text("billing_email"),
    status: text("status").default("ACTIVE").notNull(), // 'ACTIVE', 'TRIAL', 'SUSPENDED'
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_organizations_slug").on(table.slug),
    index("idx_organizations_tier").on(table.tier),
  ]
);

/**
 * Members
 * Better Auth organization membership and granular RBAC
 */
export const members = pgTable(
  "members",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    role: text("role").default("member").notNull(), // 'owner', 'admin', 'researcher', 'analyst', 'member', 'viewer'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("idx_members_org_user").on(table.organizationId, table.userId),
    index("idx_members_user").on(table.userId),
  ]
);

/**
 * Invitations
 * Organization member invitations with secure tokens
 */
export const invitations = pgTable(
  "invitations",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    email: text("email").notNull(),
    role: text("role").default("member").notNull(),
    status: text("status").default("pending").notNull(), // 'pending', 'accepted', 'rejected', 'canceled'
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    inviterId: text("inviter_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_invitations_org").on(table.organizationId),
    index("idx_invitations_email").on(table.email),
  ]
);

/**
 * API Keys (Horizon 3 Enterprise Developer Platform)
 * Enables enterprise clients to query the STRATUM Intelligence Graph via API
 */
export const apiKeys = pgTable(
  "api_keys",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    name: text("name").notNull(), // e.g. 'Production Data Pipeline'
    keyPrefix: varchar("key_prefix", { length: 12 }).notNull(), // e.g. 'str_live_...'
    keyHash: text("key_hash").notNull(), // Argon2 / SHA-256 hash of secret
    permissions: jsonb("permissions").$type<string[]>().default(["intelligence:read"]),
    rateLimitPerMin: integer("rate_limit_per_min").default(60).notNull(),
    lastUsedAt: timestamp("last_used_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }),
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_api_keys_org").on(table.organizationId),
    uniqueIndex("idx_api_keys_hash").on(table.keyHash),
  ]
);

/**
 * Audit Logs
 * Comprehensive audit trail for enterprise data security and compliance
 */
export const auditLogs = pgTable(
  "audit_logs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id").references(() => organizations.id, {
      onDelete: "set null",
    }),
    actorId: text("actor_id").references(() => users.id, {
      onDelete: "set null",
    }),
    action: text("action").notNull(), // e.g. 'EXPORT_DATASET', 'INVITE_MEMBER', 'SIGN_NDA'
    entityType: text("entity_type").notNull(), // 'deal_room', 'survey', 'dataset', 'organization'
    entityId: text("entity_id").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    changes: jsonb("changes").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_audit_logs_org").on(table.organizationId),
    index("idx_audit_logs_actor").on(table.actorId),
    index("idx_audit_logs_created").on(table.createdAt),
  ]
);
