import { describe, it, expect, beforeAll } from "vitest";
import { fileCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListProjectFiles } from "@/application/use-cases/file/listProjectFiles";
import { CreateProjectFile } from "@/application/use-cases/file/createProjectFile";

const listProjects = new ListProjects(projectCtrl);
const listProjectFiles = new ListProjectFiles(fileCtrl);
const createProjectFile = new CreateProjectFile(fileCtrl);

describe("File", () => {
  let projectId: string | number;

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].identifier;
  });

  it("listProjectFiles devuelve lista de archivos del proyecto", async () => {
    const result = await listProjectFiles.handle({ project_id: projectId });
    expect(result).toHaveProperty("files");
    expect(Array.isArray(result.files)).toBe(true);
  });

  it("createProjectFile añade un archivo al proyecto", async () => {
    await expect(
      createProjectFile.handle({
        project_id: projectId,
        token: "test-token",
        filename: "test-file.txt",
        description: "Archivo de prueba",
      }),
    ).resolves.not.toThrow();
  });
});
