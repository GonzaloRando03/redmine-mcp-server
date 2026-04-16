import { describe, it, expect, beforeAll } from "vitest";
import { journalCtrl, issueCtrl } from "./setup";
import { UpdateJournal } from "@/application/use-cases/journal/updateJournal";
import { ListIssues } from "@/application/use-cases/issue/listIssues";
import { GetIssue } from "@/application/use-cases/issue/getIssue";

const updateJournal = new UpdateJournal(journalCtrl);
const listIssues = new ListIssues(issueCtrl);
const getIssue = new GetIssue(issueCtrl);

describe("Journal", () => {
  let journalId: number;

  beforeAll(async () => {
    const issuesResult = await listIssues.handle({ offset: 0, limit: 10 });
    for (const issue of issuesResult.issues) {
      const detail = await getIssue.handle({
        id: issue.id,
        include: ["journals"],
      });
      const journals = (detail as any).journals ?? [];
      if (journals.length > 0 && journals[0].notes) {
        journalId = journals[0].id;
        break;
      }
    }
    if (!journalId)
      throw new Error(
        "No se encontró ningún journal con notas para actualizar",
      );
  });

  it("updateJournal actualiza las notas de un journal", async () => {
    const notes = `Nota actualizada por test — ${new Date().toISOString()}`;
    const result = await updateJournal.handle({ id: journalId, notes });
    expect(result).toBeDefined();
  });
});
