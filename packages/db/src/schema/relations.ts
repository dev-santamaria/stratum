import { relations } from "drizzle-orm";
import {
  users,
  sessions,
  accounts,
  organizations,
  members,
  invitations,
  apiKeys,
  auditLogs,
} from "./core";
import { countries, regions, regulatoryJurisdictions } from "./geo";
import {
  panels,
  respondents,
  researchProjects,
  surveys,
  questions,
  surveyResponses,
  surveyAnswers,
  mediaAttachments,
  syntheticRuns,
} from "./research";
import {
  graphNodes,
  graphEdges,
  marketSignals,
  marketInsights,
} from "./intelligence-graph";
import {
  dealOpportunities,
  distributorProfiles,
  matches,
  dealRooms,
  dealRoomParticipants,
  dealDocuments,
} from "./intermediation";
import {
  fieldAgents,
  fieldCampaigns,
  fieldSubmissions,
  fieldQualityAudits,
} from "./field-force";
import {
  testedProducts,
  marketListings,
  commercializationOrders,
  commercializationOrderItems,
  commercializationMetrics,
} from "./market";

// ============================================================================
// CORE / AUTH / TENANCY RELATIONS
// ============================================================================
export const usersRelations = relations(users, ({ one, many }) => ({
  country: one(countries, {
    fields: [users.countryId],
    references: [countries.id],
  }),
  sessions: many(sessions),
  accounts: many(accounts),
  memberships: many(members),
  apiKeys: many(apiKeys),
  auditLogs: many(auditLogs),
  fieldAgentProfile: one(fieldAgents, {
    fields: [users.id],
    references: [fieldAgents.userId],
  }),
}));

export const organizationsRelations = relations(organizations, ({ one, many }) => ({
  headquartersCountry: one(countries, {
    fields: [organizations.headquartersCountryId],
    references: [countries.id],
  }),
  members: many(members),
  invitations: many(invitations),
  apiKeys: many(apiKeys),
  researchProjects: many(researchProjects),
  dealOpportunities: many(dealOpportunities),
  distributorProfile: one(distributorProfiles, {
    fields: [organizations.id],
    references: [distributorProfiles.organizationId],
  }),
  testedProducts: many(testedProducts),
}));

export const membersRelations = relations(members, ({ one }) => ({
  organization: one(organizations, {
    fields: [members.organizationId],
    references: [organizations.id],
  }),
  user: one(users, {
    fields: [members.userId],
    references: [users.id],
  }),
}));

// ============================================================================
// GEO RELATIONS
// ============================================================================
export const countriesRelations = relations(countries, ({ many }) => ({
  regions: many(regions),
  regulations: many(regulatoryJurisdictions),
  panels: many(panels),
  respondents: many(respondents),
  fieldCampaigns: many(fieldCampaigns),
  dealOpportunities: many(dealOpportunities),
  distributorProfiles: many(distributorProfiles),
  marketSignals: many(marketSignals),
}));

export const regionsRelations = relations(regions, ({ one, many }) => ({
  country: one(countries, {
    fields: [regions.countryId],
    references: [countries.id],
  }),
  respondents: many(respondents),
}));

// ============================================================================
// RESEARCH & INTELLIGENCE RELATIONS
// ============================================================================
export const researchProjectsRelations = relations(researchProjects, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [researchProjects.organizationId],
    references: [organizations.id],
  }),
  surveys: many(surveys),
  mediaAttachments: many(mediaAttachments),
  syntheticRuns: many(syntheticRuns),
  fieldCampaigns: many(fieldCampaigns),
}));

export const surveysRelations = relations(surveys, ({ one, many }) => ({
  project: one(researchProjects, {
    fields: [surveys.projectId],
    references: [researchProjects.id],
  }),
  questions: many(questions),
  responses: many(surveyResponses),
}));

export const questionsRelations = relations(questions, ({ one, many }) => ({
  survey: one(surveys, {
    fields: [questions.surveyId],
    references: [surveys.id],
  }),
  answers: many(surveyAnswers),
}));

export const surveyResponsesRelations = relations(surveyResponses, ({ one, many }) => ({
  survey: one(surveys, {
    fields: [surveyResponses.surveyId],
    references: [surveys.id],
  }),
  respondent: one(respondents, {
    fields: [surveyResponses.respondentId],
    references: [respondents.id],
  }),
  answers: many(surveyAnswers),
  fieldSubmission: one(fieldSubmissions, {
    fields: [surveyResponses.id],
    references: [fieldSubmissions.surveyResponseId],
  }),
}));

export const surveyAnswersRelations = relations(surveyAnswers, ({ one }) => ({
  response: one(surveyResponses, {
    fields: [surveyAnswers.responseId],
    references: [surveyResponses.id],
  }),
  question: one(questions, {
    fields: [surveyAnswers.questionId],
    references: [questions.id],
  }),
}));

// ============================================================================
// INTELLIGENCE GRAPH RELATIONS
// ============================================================================
export const graphNodesRelations = relations(graphNodes, ({ one, many }) => ({
  country: one(countries, {
    fields: [graphNodes.countryId],
    references: [countries.id],
  }),
  outgoingEdges: many(graphEdges, { relationName: "sourceNode" }),
  incomingEdges: many(graphEdges, { relationName: "targetNode" }),
}));

export const graphEdgesRelations = relations(graphEdges, ({ one }) => ({
  sourceNode: one(graphNodes, {
    fields: [graphEdges.sourceNodeId],
    references: [graphNodes.id],
    relationName: "sourceNode",
  }),
  targetNode: one(graphNodes, {
    fields: [graphEdges.targetNodeId],
    references: [graphNodes.id],
    relationName: "targetNode",
  }),
}));

// ============================================================================
// INTERMEDIATION & DEAL ROOM RELATIONS
// ============================================================================
export const dealOpportunitiesRelations = relations(dealOpportunities, ({ one, many }) => ({
  ownerOrganization: one(organizations, {
    fields: [dealOpportunities.ownerOrganizationId],
    references: [organizations.id],
  }),
  targetCountry: one(countries, {
    fields: [dealOpportunities.targetCountryId],
    references: [countries.id],
  }),
  sourceInsight: one(marketInsights, {
    fields: [dealOpportunities.sourceInsightId],
    references: [marketInsights.id],
  }),
  matches: many(matches),
  dealRooms: many(dealRooms),
}));

export const matchesRelations = relations(matches, ({ one }) => ({
  opportunity: one(dealOpportunities, {
    fields: [matches.dealOpportunityId],
    references: [dealOpportunities.id],
  }),
  distributor: one(distributorProfiles, {
    fields: [matches.distributorProfileId],
    references: [distributorProfiles.id],
  }),
}));

export const dealRoomsRelations = relations(dealRooms, ({ one, many }) => ({
  opportunity: one(dealOpportunities, {
    fields: [dealRooms.dealOpportunityId],
    references: [dealOpportunities.id],
  }),
  hostOrganization: one(organizations, {
    fields: [dealRooms.hostOrganizationId],
    references: [organizations.id],
  }),
  partnerOrganization: one(organizations, {
    fields: [dealRooms.partnerOrganizationId],
    references: [organizations.id],
  }),
  participants: many(dealRoomParticipants),
  documents: many(dealDocuments),
}));

// ============================================================================
// FIELD FORCE RELATIONS
// ============================================================================
export const fieldAgentsRelations = relations(fieldAgents, ({ one, many }) => ({
  user: one(users, {
    fields: [fieldAgents.userId],
    references: [users.id],
  }),
  country: one(countries, {
    fields: [fieldAgents.countryId],
    references: [countries.id],
  }),
  submissions: many(fieldSubmissions),
}));

export const fieldSubmissionsRelations = relations(fieldSubmissions, ({ one, many }) => ({
  campaign: one(fieldCampaigns, {
    fields: [fieldSubmissions.fieldCampaignId],
    references: [fieldCampaigns.id],
  }),
  agent: one(fieldAgents, {
    fields: [fieldSubmissions.fieldAgentId],
    references: [fieldAgents.id],
  }),
  surveyResponse: one(surveyResponses, {
    fields: [fieldSubmissions.surveyResponseId],
    references: [surveyResponses.id],
  }),
  qualityAudits: many(fieldQualityAudits),
}));

// ============================================================================
// DIGITAL MARKET RELATIONS
// ============================================================================
export const testedProductsRelations = relations(testedProducts, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [testedProducts.organizationId],
    references: [organizations.id],
  }),
  originCountry: one(countries, {
    fields: [testedProducts.originCountryId],
    references: [countries.id],
  }),
  listings: many(marketListings),
  metrics: many(commercializationMetrics),
}));

export const marketListingsRelations = relations(marketListings, ({ one, many }) => ({
  product: one(testedProducts, {
    fields: [marketListings.testedProductId],
    references: [testedProducts.id],
  }),
  country: one(countries, {
    fields: [marketListings.targetCountryId],
    references: [countries.id],
  }),
  orderItems: many(commercializationOrderItems),
}));
