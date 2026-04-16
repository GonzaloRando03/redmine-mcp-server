import { describe, it, expect, beforeAll } from "vitest";
import { wikiCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListWikiPages } from "@/application/use-cases/wiki/listWikiPages";
import { GetWikiPage } from "@/application/use-cases/wiki/getWikiPage";
import { GetWikiPageVersion } from "@/application/use-cases/wiki/getWikiPageVersion";
import { CreateOrUpdateWikiPage } from "@/application/use-cases/wiki/createOrUpdateWikiPage";
import { DeleteWikiPage } from "@/application/use-cases/wiki/deleteWikiPage";

const listProjects = new ListProjects(projectCtrl);
const listWikiPages = new ListWikiPages(wikiCtrl);
const getWikiPage = new GetWikiPage(wikiCtrl);
const getWikiPageVersion = new GetWikiPageVersion(wikiCtrl);
const createOrUpdateWikiPage = new CreateOrUpdateWikiPage(wikiCtrl);
const deleteWikiPage = new DeleteWikiPage(wikiCtrl);

describe("Wiki", () => {
  let projectId: string | number;

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].identifier;
  });

  it("listWikiPages devuelve lista de páginas wiki", async () => {
    const result = await listWikiPages.handle({ project_id: projectId });
    expect(result).toHaveProperty("wiki_pages");
    expect(Array.isArray(result.wiki_pages)).toBe(true);
  });

  it("createOrUpdateWikiPage crea una página y deleteWikiPage la elimina", async () => {
    const title = "TestPageVitest";
    const page = await createOrUpdateWikiPage.handle({
      project_id: projectId,
      title,
      text: "Contenido de prueba desde vitest",
    });
    expect(page).toHaveProperty("title");
    expect(page).toHaveProperty("text");

    await deleteWikiPage.handle({ project_id: projectId, title });
  });

  it("getWikiPage obtiene una página wiki por título", async () => {
    const title = "TestGetPageVitest";
    await createOrUpdateWikiPage.handle({
      project_id: projectId,
      title,
      text: "Contenido para get",
    });

    const page = await getWikiPage.handle({ project_id: projectId, title });
    expect(page).toHaveProperty("title");
    expect(page).toHaveProperty("text");
    expect(page).toHaveProperty("version");

    await deleteWikiPage.handle({ project_id: projectId, title });
  });

  it("getWikiPageVersion obtiene una versión específica", async () => {
    const title = "TestVersionPageVitest";
    await createOrUpdateWikiPage.handle({
      project_id: projectId,
      title,
      text: "Versión 1",
    });

    const page = await getWikiPageVersion.handle({
      project_id: projectId,
      title,
      version: 1,
    });
    expect(page).toHaveProperty("title");
    expect(page).toHaveProperty("version");

    await deleteWikiPage.handle({ project_id: projectId, title });
  });

  it("createOrUpdateWikiPage actualiza una página existente", async () => {
    const title = "TestUpdatePageVitest";
    await createOrUpdateWikiPage.handle({
      project_id: projectId,
      title,
      text: "Contenido original",
    });

    await createOrUpdateWikiPage.handle({
      project_id: projectId,
      title,
      text: "Contenido actualizado",
      comments: "Actualización de prueba",
    });

    const updated = await getWikiPage.handle({
      project_id: projectId,
      title,
    });
    expect(updated.text).toContain("Contenido actualizado");

    await deleteWikiPage.handle({ project_id: projectId, title });
  });
});
