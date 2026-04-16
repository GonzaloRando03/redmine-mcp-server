import { describe, it, expect, beforeAll } from "vitest";
import { searchCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { Search } from "@/application/use-cases/search/search";
import { SearchInProject } from "@/application/use-cases/search/searchInProject";

const listProjects = new ListProjects(projectCtrl);
const search = new Search(searchCtrl);
const searchInProject = new SearchInProject(searchCtrl);

describe("Search", () => {
  let projectId: string | number;

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].identifier;
  });

  it("search realiza búsqueda global", async () => {
    const result = await search.handle({ q: "test" });
    expect(result).toHaveProperty("results");
    expect(Array.isArray(result.results)).toBe(true);
    expect(result).toHaveProperty("total_count");
  });

  it("searchInProject busca dentro de un proyecto", async () => {
    const result = await searchInProject.handle({
      project_id: projectId,
      q: "test",
    });
    expect(result).toHaveProperty("results");
    expect(Array.isArray(result.results)).toBe(true);
    expect(result).toHaveProperty("total_count");
  });
});
