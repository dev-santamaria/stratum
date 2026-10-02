import {
  pgTable,
  text,
  varchar,
  boolean,
  timestamp,
  integer,
  numeric,
  jsonb,
  uuid,
  index,
} from "drizzle-orm/pg-core";
import { organizations, users } from "./core";
import { countries, regions } from "./geo";

/**
 * Panels
 * Consumer cohorts, B2B executive panels, and emerging-market field respondent groups
 */
export const panels = pgTable(
  "panels",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id").references(() => organizations.id, {
      onDelete: "cascade",
    }),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    name: text("name").notNull(), // e.g. 'Nigeria Urban Youth FMCG Panel', 'Kenya Agribusiness Owners'
    panelType: text("panel_type").notNull(), // 'CONSUMER_ONLINE', 'B2B_EXPERT', 'FIELD_OFFLINE', 'SYNTHETIC_TWIN'
    targetSize: integer("target_size").default(1000).notNull(),
    currentCount: integer("current_count").default(0).notNull(),
    status: text("status").default("ACTIVE").notNull(), // 'ACTIVE', 'PAUSED', 'ARCHIVED'
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_panels_country").on(table.countryId),
    index("idx_panels_type").on(table.panelType),
  ]
);

/**
 * Respondents
 * Real human panelists with localized demographic & psychographic attributes
 */
export const respondents = pgTable(
  "respondents",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    panelId: uuid("panel_id").references(() => panels.id, {
      onDelete: "set null",
    }),
    countryId: uuid("country_id")
      .references(() => countries.id)
      .notNull(),
    regionId: uuid("region_id").references(() => regions.id),
    userId: text("user_id").references(() => users.id, { onDelete: "set null" }), // Optional linked auth user
    anonymousIdentifier: varchar("anonymous_identifier", { length: 64 })
      .unique()
      .notNull(),
    gender: text("gender"), // 'MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY'
    ageGroup: text("age_group"), // '18-24', '25-34', '35-44', '45-54', '55+'
    incomeQuintile: text("income_quintile"), // 'Q1_LOW', 'Q2_LOWER_MID', 'Q3_MID', 'Q4_UPPER_MID', 'Q5_HIGH'
    educationLevel: text("education_level"),
    settlementType: text("settlement_type").default("URBAN").notNull(), // 'URBAN', 'PERI_URBAN', 'RURAL'
    primaryLanguage: varchar("primary_language", { length: 10 }).default("en"),
    verificationLevel: text("verification_level")
      .default("UNVERIFIED")
      .notNull(), // 'UNVERIFIED', 'PHONE_VERIFIED', 'NATIONAL_ID_VERIFIED', 'BIOMETRIC_VERIFIED'
    rewardPointsBalance: integer("reward_points_balance").default(0).notNull(),
    qualityScore: numeric("quality_score", { precision: 4, scale: 2 }).default("1.00"), // Reliability rating based on speed/consistency checks
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_respondents_country").on(table.countryId),
    index("idx_respondents_age_gender").on(table.ageGroup, table.gender),
    index("idx_respondents_verification").on(table.verificationLevel),
  ]
);

/**
 * Research Projects / Studies
 * High-level research engagement (e.g. concept test, brand tracking, ethnography)
 */
export const researchProjects = pgTable(
  "research_projects",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: text("organization_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    description: text("description"),
    methodology: text("methodology").notNull(), // 'QUANT_SURVEY', 'QUAL_IDI', 'FOCUS_GROUP', 'PRODUCT_TEST', 'HYBRID_SYNTHETIC'
    targetCountryIds: jsonb("target_country_ids").$type<string[]>().default([]),
    status: text("status").default("DRAFT").notNull(), // 'DRAFT', 'ACTIVE', 'FIELDWORK_COMPLETE', 'ANALYZING', 'COMPLETED'
    startDate: timestamp("start_date", { withTimezone: true }),
    endDate: timestamp("end_date", { withTimezone: true }),
    createdById: text("created_by_id").references(() => users.id),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_projects_org").on(table.organizationId),
    index("idx_projects_status").on(table.status),
  ]
);

/**
 * Surveys
 * Dynamic questionnaires supporting logic jumps and multi-language translations
 */
export const surveys = pgTable(
  "surveys",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
      .references(() => researchProjects.id, { onDelete: "cascade" })
      .notNull(),
    title: text("title").notNull(),
    version: integer("version").default(1).notNull(),
    estimatedMinutes: integer("estimated_minutes").default(10).notNull(),
    languages: jsonb("languages").$type<string[]>().default(["en"]),
    defaultLanguage: varchar("default_language", { length: 10 }).default("en"),
    isPublished: boolean("is_published").default(false).notNull(),
    quotaTarget: integer("quota_target").default(500).notNull(),
    responseCount: integer("response_count").default(0).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_surveys_project").on(table.projectId),
  ]
);

/**
 * Questions
 * Individual questions supporting quantitative options, ratings, audio/video prompts
 */
export const questions = pgTable(
  "questions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    surveyId: uuid("survey_id")
      .references(() => surveys.id, { onDelete: "cascade" })
      .notNull(),
    orderIndex: integer("order_index").notNull(),
    questionType: text("question_type").notNull(), // 'SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'LIKERT_SCALE', 'NUMERIC', 'OPEN_TEXT', 'AUDIO_PROMPT', 'VIDEO_PROMPT'
    questionText: text("question_text").notNull(),
    translations: jsonb("translations")
      .$type<Record<string, string>>()
      .default({}), // e.g. { 'fr': '...', 'sw': '...' }
    options: jsonb("options")
      .$type<Array<{ id: string; label: string; value: string | number }>>()
      .default([]),
    logicRules: jsonb("logic_rules")
      .$type<Array<{ condition: string; targetQuestionId: string }>>()
      .default([]),
    isRequired: boolean("is_required").default(true).notNull(),
    aiAnalysisTag: text("ai_analysis_tag"), // Tag connecting question to Intelligence Graph (e.g. 'brand_perception', 'packaging_appeal')
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_questions_survey").on(table.surveyId),
    index("idx_questions_order").on(table.surveyId, table.orderIndex),
  ]
);

/**
 * Survey Responses
 * An individual completion session by a human or synthetic respondent
 */
export const surveyResponses = pgTable(
  "survey_responses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    surveyId: uuid("survey_id")
      .references(() => surveys.id, { onDelete: "cascade" })
      .notNull(),
    respondentId: uuid("respondent_id").references(() => respondents.id, {
      onDelete: "set null",
    }),
    isSynthetic: boolean("is_synthetic").default(false).notNull(), // Flag for AI synthetic respondents
    durationSeconds: integer("duration_seconds"),
    completionStatus: text("completion_status")
      .default("STARTED")
      .notNull(), // 'STARTED', 'COMPLETED', 'SCREENED_OUT', 'QUALITY_REJECTED'
    qualityScore: numeric("quality_score", { precision: 4, scale: 2 }).default("1.00"), // Checked by AI anti-speeder / straight-lining algorithms
    startedAt: timestamp("started_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }),
  },
  (table) => [
    index("idx_responses_survey").on(table.surveyId),
    index("idx_responses_respondent").on(table.respondentId),
    index("idx_responses_synthetic").on(table.isSynthetic),
  ]
);

/**
 * Survey Answers
 * Item-level answer submissions
 */
export const surveyAnswers = pgTable(
  "survey_answers",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    responseId: uuid("response_id")
      .references(() => surveyResponses.id, { onDelete: "cascade" })
      .notNull(),
    questionId: uuid("question_id")
      .references(() => questions.id, { onDelete: "cascade" })
      .notNull(),
    selectedOptions: jsonb("selected_options").$type<string[]>().default([]),
    textValue: text("text_value"),
    numericValue: numeric("numeric_value", { precision: 14, scale: 4 }),
    sentimentScore: numeric("sentiment_score", { precision: 4, scale: 2 }), // AI NLP sentiment score (-1.00 to +1.00)
    sentimentLabel: text("sentiment_label"), // 'POSITIVE', 'NEUTRAL', 'NEGATIVE'
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_answers_response").on(table.responseId),
    index("idx_answers_question").on(table.questionId),
  ]
);

/**
 * Media Attachments (Qualitative Depth)
 * Audio/video recordings from focus groups, IDIs, and field interviews
 */
export const mediaAttachments = pgTable(
  "media_attachments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
      .references(() => researchProjects.id, { onDelete: "cascade" })
      .notNull(),
    responseId: uuid("response_id").references(() => surveyResponses.id, {
      onDelete: "set null",
    }),
    mediaType: text("media_type").notNull(), // 'AUDIO_INTERVIEW', 'VIDEO_FOCUS_GROUP', 'SHELF_PHOTO', 'CONSENT_RECORDING'
    storageUrl: text("storage_url").notNull(), // Supabase Storage bucket URL
    transcriptionText: text("transcription_text"), // AI transcription
    detectedLanguage: varchar("detected_language", { length: 10 }),
    extractedKeywords: jsonb("extracted_keywords").$type<string[]>().default([]),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_media_project").on(table.projectId),
  ]
);

/**
 * Synthetic Runs (Pillar 2: Synthetic + Human Hybrid Panels)
 * High-speed AI customer simulations calibrated against human ground-truth data
 */
export const syntheticRuns = pgTable(
  "synthetic_runs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
      .references(() => researchProjects.id, { onDelete: "cascade" })
      .notNull(),
    targetCountryId: uuid("target_country_id")
      .references(() => countries.id)
      .notNull(),
    simulatedSampleSize: integer("simulated_sample_size").notNull(), // e.g. 5,000 synthetic agents
    modelConfig: jsonb("model_config").$type<{
      modelName: string;
      temperature: number;
      demographicPriors: Record<string, unknown>;
    }>().notNull(),
    generatedOutputSummary: jsonb("generated_output_summary")
      .$type<Record<string, unknown>>()
      .default({}),
    humanCalibrationScore: numeric("human_calibration_score", {
      precision: 5,
      scale: 4,
    }), // Correlation against real human baseline (e.g. 0.9450)
    executionTimeMs: integer("execution_time_ms"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("idx_synthetic_project").on(table.projectId),
  ]
);
