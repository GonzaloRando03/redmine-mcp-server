import { describe, it, expect, beforeAll } from "vitest";
import { projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { GetProject } from "@/application/use-cases/project/getProject";
import { CreateProject } from "@/application/use-cases/project/createProject";
import { UpdateProject } from "@/application/use-cases/project/updateProject";
import { DeleteProject } from "@/application/use-cases/project/deleteProject";
import { ArchiveProject } from "@/application/use-cases/project/archiveProject";
import { UnarchiveProject } from "@/application/use-cases/project/unarchiveProject";

const listProjects = new ListProjects(projectCtrl);
const getProject = new GetProject(projectCtrl);
const createProject = new CreateProject(projectCtrl);
const updateProject = new UpdateProject(projectCtrl);
const deleteProject = new DeleteProject(projectCtrl);
const archiveProject = new ArchiveProject(projectCtrl);
const unarchiveProject = new UnarchiveProject(projectCtrl);

describe("Project", () => {
  let projects: Awaited<ReturnType<typeof listProjects.handle>>["projects"];

  beforeAll(async () => {
    const result = await listProjects.handle({ offset: 0, limit: 5 });
    projects = result.projects;
  });

  it("listProjects devuelve la lista de proyectos", async () => {
    const result = await listProjects.handle({ offset: 0, limit: 5 });
    expect(result).toHaveProperty("projects");
    expect(Array.isArray(result.projects)).toBe(true);
    expect(result).toHaveProperty("total_count");
    expect(result).toHaveProperty("offset");
    expect(result).toHaveProperty("limit");
  });

  it("cada proyecto tiene id, name e identifier", () => {
    for (const project of projects) {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("name");
      expect(project).toHaveProperty("identifier");
    }
  });

  it("getProject devuelve un proyecto por ID", async () => {
    if (projects.length === 0) return;
    const project = await getProject.handle({ id: projects[0].id });
    expect(project).toHaveProperty("id", projects[0].id);
    expect(project).toHaveProperty("name");
    expect(project).toHaveProperty("identifier");
  });

  it("getProject con include devuelve datos adicionales", async () => {
    if (projects.length === 0) return;
    const project = await getProject.handle({
      id: projects[0].id,
      include: "trackers,enabled_modules",
    });
    expect(project).toHaveProperty("trackers");
    expect(project).toHaveProperty("enabled_modules");
  });
});
