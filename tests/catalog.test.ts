import { describe, it, expect } from "vitest";
import {
  trackerCtrl,
  issueStatusCtrl,
  customFieldCtrl,
  queryCtrl,
} from "./setup";
import { ListTrackers } from "@/application/use-cases/tracker/listTrackers";
import { ListIssueStatuses } from "@/application/use-cases/issue-status/listIssueStatuses";
import { ListCustomFields } from "@/application/use-cases/custom-field/listCustomFields";
import { ListQueries } from "@/application/use-cases/query/listQueries";

const listTrackers = new ListTrackers(trackerCtrl);
const listIssueStatuses = new ListIssueStatuses(issueStatusCtrl);
const listCustomFields = new ListCustomFields(customFieldCtrl);
const listQueries = new ListQueries(queryCtrl);

describe("Catalog", () => {
  it("listTrackers retorna la lista de trackers", async () => {
    const result = await listTrackers.handle({});
    expect(result).toHaveProperty("trackers");
    expect(Array.isArray(result.trackers)).toBe(true);
    if (result.trackers.length > 0) {
      expect(result.trackers[0]).toHaveProperty("id");
      expect(result.trackers[0]).toHaveProperty("name");
    }
  });

  it("listIssueStatuses retorna la lista de estados de issues", async () => {
    const result = await listIssueStatuses.handle({});
    expect(result).toHaveProperty("issue_statuses");
    expect(Array.isArray(result.issue_statuses)).toBe(true);
    if (result.issue_statuses.length > 0) {
      expect(result.issue_statuses[0]).toHaveProperty("id");
      expect(result.issue_statuses[0]).toHaveProperty("name");
      expect(result.issue_statuses[0]).toHaveProperty("is_closed");
    }
  });

  it("listCustomFields retorna la lista de custom fields", async () => {
    const result = await listCustomFields.handle({});
    expect(result).toHaveProperty("custom_fields");
    expect(Array.isArray(result.custom_fields)).toBe(true);
    if (result.custom_fields.length > 0) {
      expect(result.custom_fields[0]).toHaveProperty("id");
      expect(result.custom_fields[0]).toHaveProperty("name");
    }
  });

  it("listQueries retorna la lista de queries guardadas", async () => {
    const result = await listQueries.handle({});
    expect(result).toHaveProperty("queries");
    expect(Array.isArray(result.queries)).toBe(true);
    if (result.queries.length > 0) {
      expect(result.queries[0]).toHaveProperty("id");
      expect(result.queries[0]).toHaveProperty("name");
    }
  });
});
