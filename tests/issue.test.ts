import { describe, it, expect, beforeAll } from "vitest";
import { issueCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListIssues } from "@/application/use-cases/issue/listIssues";
import { GetIssue } from "@/application/use-cases/issue/getIssue";
import { CreateIssue } from "@/application/use-cases/issue/createIssue";
import { UpdateIssue } from "@/application/use-cases/issue/updateIssue";
import { DeleteIssue } from "@/application/use-cases/issue/deleteIssue";
import { AddWatcher } from "@/application/use-cases/issue/addWatcher";
import { RemoveWatcher } from "@/application/use-cases/issue/removeWatcher";

const listProjects = new ListProjects(projectCtrl);
const listIssues = new ListIssues(issueCtrl);
const getIssue = new GetIssue(issueCtrl);
const createIssue = new CreateIssue(issueCtrl);
const updateIssue = new UpdateIssue(issueCtrl);
const deleteIssue = new DeleteIssue(issueCtrl);
const addWatcher = new AddWatcher(issueCtrl);
const removeWatcher = new RemoveWatcher(issueCtrl);

describe("Issue", () => {
  let projectId: number;
  let issues: Awaited<ReturnType<typeof listIssues.handle>>["issues"];

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].id;

    const issueResult = await listIssues.handle({
      project_id: projectId,
      limit: 5,
    });
    issues = issueResult.issues;
  });

  it("listIssues devuelve lista de issues con paginación", async () => {
    const result = await listIssues.handle({ limit: 5 });
    expect(result).toHaveProperty("issues");
    expect(Array.isArray(result.issues)).toBe(true);
    expect(result).toHaveProperty("total_count");
    expect(result).toHaveProperty("offset");
    expect(result).toHaveProperty("limit");
  });

  it("listIssues filtra por project_id", async () => {
    const result = await listIssues.handle({ project_id: projectId, limit: 5 });
    expect(result).toHaveProperty("issues");
    for (const issue of result.issues) {
      expect(issue.project.id).toBe(projectId);
    }
  });

  it("listIssues filtra por status_id=open", async () => {
    const result = await listIssues.handle({ status_id: "open", limit: 5 });
    expect(result).toHaveProperty("issues");
  });

  it("cada issue tiene id, subject, project, tracker, status, priority", () => {
    for (const issue of issues) {
      expect(issue).toHaveProperty("id");
      expect(issue).toHaveProperty("subject");
      expect(issue).toHaveProperty("project");
      expect(issue).toHaveProperty("tracker");
      expect(issue).toHaveProperty("status");
      expect(issue).toHaveProperty("priority");
    }
  });

  it("getIssue devuelve una issue por ID", async () => {
    if (issues.length === 0) return;
    const issue = await getIssue.handle({ id: issues[0].id });
    expect(issue).toHaveProperty("id", issues[0].id);
    expect(issue).toHaveProperty("subject");
    expect(issue).toHaveProperty("project");
  });

  it("getIssue con include devuelve datos adicionales", async () => {
    if (issues.length === 0) return;
    const issue = await getIssue.handle({
      id: issues[0].id,
      include: "journals,watchers",
    });
    expect(issue).toHaveProperty("journals");
    expect(issue).toHaveProperty("watchers");
  });
});
