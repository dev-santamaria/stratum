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
} from "drizzle-orm/pg-core";
import { users } from "./core";
import { countries } from "./geo";
import { researchProjects, surveyResponses } from "./research";

/**
 * Field Agents (Pillar 5: Field-Force Augmentation with AI)
 * On-the-ground enumerators, field supervisors, and local qualitative interviewers
 */
export const fieldAgents = pgTable(
  "field_agents",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    assignedRegionIds: jsonb("assigned_region_ids").$type<string[]>().default([]),
    kycStatus: text("kyc_status").default("PENDING").notNull(), // 'PENDING', 'VERIFIED', 'REJECTED'
    performanceRating: numeric("performance_rating", {
      precision: 3,
      scale: 2,
    }).default("5.00").notNull(),
    fraudRiskScore: numeric("fraud_risk_score", {
      precision: 4,
      scale: 2,
    }).default("0.00").notNull(), // Aggregated AI quality risk rating
    deviceInfo: jsonb("device_info")
      .$type<{ deviceId: string; os: string; appVersion: string }>()
      .default({ deviceId: "", os: "", appVersion: "" }),
    status: text("status").default("ACTIVE").notNull(), // 'ACTIVE', 'SUSPENDED', 'INACTIVE'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_field_agents_user").on(table.userId),
    index("idx_field_agents_country").on(table.countryId),
    index("idx_field_agents_status").on(table.status),
  ]
);

/**
 * Field Campaigns
 * Geofenced fieldwork operations with sampling quotas and polygon boundaries
 */
export const fieldCampaigns = pgTable(
  "field_campaigns",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
      .references(() => researchProjects.id, { onDelete: "cascade" })
      .notNull(),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    title: text("title").notNull(),
    targetQuota: integer("target_quota").notNull(),
    completedQuota: integer("completed_quota").default(0).notNull(),
    geofencePolygon: jsonb("geofence_polygon")
      .$type<Array<{ lat: number; lng: number }>>()
      .default([]), // GeoJSON polygon coordinates for territory boundary
    startDate: timestamp("start_date", { withTimezone: true }),
    endDate: timestamp("end_date", { withTimezone: true }),
    status: text("status").default("PLANNED").notNull(), // 'PLANNED', 'FIELDWORK_ACTIVE', 'PAUSED', 'AUDIT_REVIEW', 'COMPLETED'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_field_campaigns_project").on(table.projectId),
    index("idx_field_campaigns_country").on(table.countryId),
    index("idx_field_campaigns_status").on(table.status),
  ]
);

/**
 * Field Submissions
 * Audit-grade, GPS-stamped, time-stamped, audio-verified submissions from field researchers
 */
export const fieldSubmissions = pgTable(
  "field_submissions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    fieldCampaignId: uuid("field_campaign_id")
      .references(() => fieldCampaigns.id, { onDelete: "cascade" })
      .notNull(),
    fieldAgentId: uuid("field_agent_id")
      .references(() => fieldAgents.id, { onDelete: "cascade" })
      .notNull(),
    surveyResponseId: uuid("survey_response_id")
      .references(() => surveyResponses.id, { onDelete: "cascade" })
      .notNull(),
    latitude: numeric("latitude", { precision: 10, scale: 7 }).notNull(),
    longitude: numeric("longitude", { precision: 10, scale: 7 }).notNull(),
    gpsAccuracyMeters: numeric("gps_accuracy_meters", { precision: 6, scale: 2 }),
    isMockGpsDetected: boolean("is_mock_gps_detected").default(false).notNull(), // Anti-spoofing check
    startedAt: timestamp("started_at", { withTimezone: true }).notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }).notNull(),
    audioVerificationUrl: text("audio_verification_url"), // Short ambient audio recording confirming genuine human dialogue
    audioDurationSeconds: integer("audio_duration_seconds"),
    batteryPercentage: integer("battery_percentage"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_field_submissions_campaign").on(table.fieldCampaignId),
    index("idx_field_submissions_agent").on(table.fieldAgentId),
    index("idx_field_submissions_response").on(table.surveyResponseId),
  ]
);

/**
 * Field Quality Audits
 * Multi-layer AI quality verification (detecting speeders, straight-lining, and location fraud)
 */
export const fieldQualityAudits = pgTable(
  "field_quality_audits",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    fieldSubmissionId: uuid("field_submission_id")
      .references(() => fieldSubmissions.id, { onDelete: "cascade" })
      .notNull(),
    auditorId: text("auditor_id").references(() => users.id, {
      onDelete: "set null",
    }), // Nullable if automated AI audit
    isAutomatedAiCheck: boolean("is_automated_ai_check").default(true).notNull(),
    auditStatus: text("audit_status").default("APPROVED").notNull(), // 'APPROVED', 'FLAGGED_FOR_REVIEW', 'FRAUD_REJECTED'
    speederFlag: boolean("speeder_flag").default(false).notNull(), // Unrealistic completion speed
    straightLiningFlag: boolean("straight_lining_flag").default(false).notNull(), // Inattentive identical answer patterns
    audioVoicePresenceFlag: boolean("audio_voice_presence_flag").default(true).notNull(), // AI acoustic voice activity detection
    gpsGeofenceMatchFlag: boolean("gps_geofence_match_flag").default(true).notNull(), // Verified within target coordinate bounds
    confidenceScore: numeric("confidence_score", {
      precision: 4,
      scale: 2,
    }).default("1.00").notNull(),
    auditorNotes: text("auditor_notes"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_quality_audits_submission").on(table.fieldSubmissionId),
    index("idx_quality_audits_status").on(table.auditStatus),
  ]
);
