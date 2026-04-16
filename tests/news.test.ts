import { describe, it, expect, beforeAll } from "vitest";
import { newsCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListAllNews } from "@/application/use-cases/news/listAllNews";
import { ListProjectNews } from "@/application/use-cases/news/listProjectNews";
import { GetNews } from "@/application/use-cases/news/getNews";
import { CreateNews } from "@/application/use-cases/news/createNews";
import { UpdateNews } from "@/application/use-cases/news/updateNews";

const listProjects = new ListProjects(projectCtrl);
const listAllNews = new ListAllNews(newsCtrl);
const listProjectNews = new ListProjectNews(newsCtrl);
const getNews = new GetNews(newsCtrl);
const createNews = new CreateNews(newsCtrl);
const updateNews = new UpdateNews(newsCtrl);

describe("News", () => {
  let projectId: string | number;

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].id;
  });

  it("listAllNews devuelve lista de noticias", async () => {
    const result = await listAllNews.handle({ offset: 0, limit: 5 });
    expect(result).toHaveProperty("news");
    expect(Array.isArray(result.news)).toBe(true);
    expect(result).toHaveProperty("total_count");
  });

  it("listProjectNews devuelve noticias de un proyecto", async () => {
    const result = await listProjectNews.handle({
      project_id: projectId,
      offset: 0,
      limit: 5,
    });
    expect(result).toHaveProperty("news");
    expect(Array.isArray(result.news)).toBe(true);
    expect(result).toHaveProperty("total_count");
  });

  it("createNews crea una noticia", async () => {
    const created = await createNews.handle({
      project_id: projectId,
      title: "Test News from vitest",
      description: "Descripción de prueba desde vitest",
    });
    expect(created).toHaveProperty("id");
    expect(created.title).toBe("Test News from vitest");
  });

  it("getNews obtiene una noticia por ID", async () => {
    const created = await createNews.handle({
      project_id: projectId,
      title: "Test GetNews vitest",
      description: "Descripción para get",
    });

    const news = await getNews.handle({ id: created.id });
    expect(news).toHaveProperty("id", created.id);
    expect(news).toHaveProperty("title");
    expect(news).toHaveProperty("description");
  });

  it("updateNews actualiza una noticia", async () => {
    const created = await createNews.handle({
      project_id: projectId,
      title: "Before update news",
      description: "Descripción original",
    });

    await updateNews.handle({
      id: created.id,
      title: "After update news",
      summary: "Resumen actualizado",
    });

    const updated = await getNews.handle({ id: created.id });
    expect(updated.title).toBe("After update news");
  });
});
