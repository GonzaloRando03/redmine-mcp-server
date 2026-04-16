import { NewsService } from "@/application/services/newsService";
import { CreateNewsParams } from "@/domain/news/createNewsParams";
import { GetNewsParams } from "@/domain/news/getNewsParams";
import { ListAllNewsParams } from "@/domain/news/listAllNewsParams";
import { ListNewsResult } from "@/domain/news/listNewsResult";
import { ListProjectNewsParams } from "@/domain/news/listProjectNewsParams";
import { RedmineNews } from "@/domain/news/redmineNews";
import { UpdateNewsParams } from "@/domain/news/updateNewsParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class NewsController
  extends RedmineApiBaseController
  implements NewsService
{
  async listAllNews(params?: ListAllNewsParams): Promise<ListNewsResult> {
    return this.request<ListNewsResult>(
      "GET",
      "/news.json",
      params as Record<string, unknown>,
      "List all news",
    );
  }

  async listProjectNews(
    params: ListProjectNewsParams,
  ): Promise<ListNewsResult> {
    const { project_id, ...query } = params;
    return this.request<ListNewsResult>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/news.json`,
      query as Record<string, unknown>,
      "List project news",
    );
  }

  async getNews(params: GetNewsParams): Promise<RedmineNews> {
    const { id, include } = params;
    const query: Record<string, unknown> = {};
    if (include && include.length > 0) {
      query.include = include.join(",");
    }
    const raw = await this.request<{ news: RedmineNews }>(
      "GET",
      `/news/${encodeURIComponent(id)}.json`,
      Object.keys(query).length > 0 ? query : undefined,
      "Get news",
    );
    return raw.news;
  }

  async createNews(params: CreateNewsParams): Promise<RedmineNews> {
    const { project_id, ...newsFields } = params;
    const raw = await this.request<{ news: RedmineNews }>(
      "POST",
      `/projects/${encodeURIComponent(project_id)}/news.json`,
      { news: newsFields },
      "Create news",
    );
    return raw.news;
  }

  async updateNews(params: UpdateNewsParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/news/${encodeURIComponent(id)}.json`,
      { news: fields },
      "Update news",
    );
  }
}
