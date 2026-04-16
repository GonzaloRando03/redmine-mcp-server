import { describe, it, expect } from "vitest";
import { enumerationCtrl } from "./setup";
import { ListIssuePriorities } from "@/application/use-cases/enumeration/listIssuePriorities";
import { ListTimeEntryActivities } from "@/application/use-cases/enumeration/listTimeEntryActivities";
import { ListDocumentCategories } from "@/application/use-cases/enumeration/listDocumentCategories";

const listIssuePriorities = new ListIssuePriorities(enumerationCtrl);
const listTimeEntryActivities = new ListTimeEntryActivities(enumerationCtrl);
const listDocumentCategories = new ListDocumentCategories(enumerationCtrl);

describe("Enumeration", () => {
  it("listIssuePriorities retorna prioridades de issues", async () => {
    const result = await listIssuePriorities.handle({});
    expect(result).toHaveProperty("issue_priorities");
    expect(Array.isArray(result.issue_priorities)).toBe(true);
    if (result.issue_priorities.length > 0) {
      expect(result.issue_priorities[0]).toHaveProperty("id");
      expect(result.issue_priorities[0]).toHaveProperty("name");
    }
  });

  it("listTimeEntryActivities retorna actividades de entradas de tiempo", async () => {
    const result = await listTimeEntryActivities.handle({});
    expect(result).toHaveProperty("time_entry_activities");
    expect(Array.isArray(result.time_entry_activities)).toBe(true);
    if (result.time_entry_activities.length > 0) {
      expect(result.time_entry_activities[0]).toHaveProperty("id");
      expect(result.time_entry_activities[0]).toHaveProperty("name");
    }
  });

  it("listDocumentCategories retorna categorías de documentos", async () => {
    const result = await listDocumentCategories.handle({});
    expect(result).toHaveProperty("document_categories");
    expect(Array.isArray(result.document_categories)).toBe(true);
  });
});
