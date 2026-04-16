import { describe, it, expect, beforeAll } from "vitest";
import { issueCategoryCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListIssueCategories } from "@/application/use-cases/issue-category/listIssueCategories";
import { GetIssueCategory } from "@/application/use-cases/issue-category/getIssueCategory";
import { CreateIssueCategory } from "@/application/use-cases/issue-category/createIssueCategory";
import { UpdateIssueCategory } from "@/application/use-cases/issue-category/updateIssueCategory";
import { DeleteIssueCategory } from "@/application/use-cases/issue-category/deleteIssueCategory";

const listProjects = new ListProjects(projectCtrl);
const listIssueCategories = new ListIssueCategories(issueCategoryCtrl);
const getIssueCategory = new GetIssueCategory(issueCategoryCtrl);
const createIssueCategory = new CreateIssueCategory(issueCategoryCtrl);
const updateIssueCategory = new UpdateIssueCategory(issueCategoryCtrl);
const deleteIssueCategory = new DeleteIssueCategory(issueCategoryCtrl);

describe("Issue Category", () => {
  let projectId: string | number;
  let categories: Awaited<
    ReturnType<typeof listIssueCategories.handle>
  >["issue_categories"];

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].id;

    const result = await listIssueCategories.handle({
      project_id: projectId,
    });
    categories = result.issue_categories;
  });

  it("listIssueCategories devuelve lista de categorías", async () => {
    const result = await listIssueCategories.handle({
      project_id: projectId,
    });
    expect(result).toHaveProperty("issue_categories");
    expect(Array.isArray(result.issue_categories)).toBe(true);
    expect(result).toHaveProperty("total_count");
  });

  it("cada categoría tiene id y name", () => {
    for (const cat of categories) {
      expect(cat).toHaveProperty("id");
      expect(cat).toHaveProperty("name");
    }
  });

  it("getIssueCategory devuelve una categoría por ID", async () => {
    if (categories.length === 0) return;
    const cat = await getIssueCategory.handle({ id: categories[0].id });
    expect(cat).toHaveProperty("id", categories[0].id);
    expect(cat).toHaveProperty("name");
  });

  it("createIssueCategory crea una categoría y deleteIssueCategory la elimina", async () => {
    const created = await createIssueCategory.handle({
      project_id: projectId,
      name: "Test Category from vitest",
    });
    expect(created).toHaveProperty("id");
    expect(created.name).toBe("Test Category from vitest");

    await deleteIssueCategory.handle({ id: created.id });
  });

  it("updateIssueCategory actualiza una categoría", async () => {
    const created = await createIssueCategory.handle({
      project_id: projectId,
      name: "Before update category",
    });

    await updateIssueCategory.handle({
      id: created.id,
      name: "After update category",
    });

    const updated = await getIssueCategory.handle({ id: created.id });
    expect(updated.name).toBe("After update category");

    await deleteIssueCategory.handle({ id: created.id });
  });
});
