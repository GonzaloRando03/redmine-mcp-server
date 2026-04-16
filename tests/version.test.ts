import { describe, it, expect, beforeAll } from "vitest";
import { versionCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListProjectVersions } from "@/application/use-cases/version/listProjectVersions";
import { GetVersion } from "@/application/use-cases/version/getVersion";
import { CreateVersion } from "@/application/use-cases/version/createVersion";
import { UpdateVersion } from "@/application/use-cases/version/updateVersion";
import { DeleteVersion } from "@/application/use-cases/version/deleteVersion";

const listProjects = new ListProjects(projectCtrl);
const listProjectVersions = new ListProjectVersions(versionCtrl);
const getVersion = new GetVersion(versionCtrl);
const createVersion = new CreateVersion(versionCtrl);
const updateVersion = new UpdateVersion(versionCtrl);
const deleteVersion = new DeleteVersion(versionCtrl);

describe("Version", () => {
  let projectId: string | number;
  let versions: Awaited<
    ReturnType<typeof listProjectVersions.handle>
  >["versions"];

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].id;

    const result = await listProjectVersions.handle({
      project_id: projectId,
    });
    versions = result.versions;
  });

  it("listProjectVersions devuelve lista de versiones", async () => {
    const result = await listProjectVersions.handle({
      project_id: projectId,
    });
    expect(result).toHaveProperty("versions");
    expect(Array.isArray(result.versions)).toBe(true);
    expect(result).toHaveProperty("total_count");
  });

  it("cada versión tiene id, name y status", () => {
    for (const v of versions) {
      expect(v).toHaveProperty("id");
      expect(v).toHaveProperty("name");
      expect(v).toHaveProperty("status");
    }
  });

  it("getVersion devuelve una versión por ID", async () => {
    if (versions.length === 0) return;
    const version = await getVersion.handle({ id: versions[0].id });
    expect(version).toHaveProperty("id", versions[0].id);
    expect(version).toHaveProperty("name");
    expect(version).toHaveProperty("status");
  });

  it("createVersion crea una versión y deleteVersion la elimina", async () => {
    const created = await createVersion.handle({
      project_id: projectId,
      name: "Test Version from vitest",
    });
    expect(created).toHaveProperty("id");
    expect(created.name).toBe("Test Version from vitest");

    await deleteVersion.handle({ id: created.id });
  });

  it("updateVersion actualiza una versión", async () => {
    const created = await createVersion.handle({
      project_id: projectId,
      name: "Before update version",
    });

    await updateVersion.handle({
      id: created.id,
      name: "After update version",
      status: "locked",
    });

    const updated = await getVersion.handle({ id: created.id });
    expect(updated.name).toBe("After update version");
    expect(updated.status).toBe("locked");

    await deleteVersion.handle({ id: created.id });
  });
});
