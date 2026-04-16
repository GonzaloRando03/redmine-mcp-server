import { describe, it, expect, beforeAll } from "vitest";
import { issueRelationCtrl, issueCtrl } from "./setup";
import { ListIssues } from "@/application/use-cases/issue/listIssues";
import { ListIssueRelations } from "@/application/use-cases/issue-relation/listIssueRelations";
import { GetIssueRelation } from "@/application/use-cases/issue-relation/getIssueRelation";
import { CreateIssueRelation } from "@/application/use-cases/issue-relation/createIssueRelation";
import { DeleteIssueRelation } from "@/application/use-cases/issue-relation/deleteIssueRelation";

const listIssues = new ListIssues(issueCtrl);
const listIssueRelations = new ListIssueRelations(issueRelationCtrl);
const getIssueRelation = new GetIssueRelation(issueRelationCtrl);
const createIssueRelation = new CreateIssueRelation(issueRelationCtrl);
const deleteIssueRelation = new DeleteIssueRelation(issueRelationCtrl);

describe("Issue Relation", () => {
  let issueIds: number[];

  beforeAll(async () => {
    const result = await listIssues.handle({ offset: 0, limit: 5 });
    issueIds = result.issues.map((i) => i.id);
    if (issueIds.length < 2)
      throw new Error("Se necesitan al menos 2 issues para probar relaciones");
  });

  it("listIssueRelations devuelve lista de relaciones", async () => {
    const result = await listIssueRelations.handle({
      issue_id: issueIds[0],
    });
    expect(result).toHaveProperty("relations");
    expect(Array.isArray(result.relations)).toBe(true);
  });

  it("createIssueRelation crea una relación y deleteIssueRelation la elimina", async () => {
    const created = await createIssueRelation.handle({
      issue_id: issueIds[0],
      issue_to_id: issueIds[1],
      relation_type: "relates",
    });
    expect(created).toHaveProperty("id");
    expect(created).toHaveProperty("relation_type", "relates");

    await deleteIssueRelation.handle({ id: created.id });
  });

  it("getIssueRelation devuelve una relación por ID", async () => {
    const created = await createIssueRelation.handle({
      issue_id: issueIds[0],
      issue_to_id: issueIds[1],
      relation_type: "relates",
    });

    const relation = await getIssueRelation.handle({ id: created.id });
    expect(relation).toHaveProperty("id", created.id);
    expect(relation).toHaveProperty("relation_type", "relates");

    await deleteIssueRelation.handle({ id: created.id });
  });

  it("createIssueRelation con tipo precedes y delay", async () => {
    const created = await createIssueRelation.handle({
      issue_id: issueIds[0],
      issue_to_id: issueIds[1],
      relation_type: "precedes",
      delay: 3,
    });
    expect(created).toHaveProperty("id");
    expect(created).toHaveProperty("relation_type", "precedes");
    expect(created).toHaveProperty("delay", 3);

    await deleteIssueRelation.handle({ id: created.id });
  });
});
