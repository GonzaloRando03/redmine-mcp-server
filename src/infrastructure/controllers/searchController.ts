import { SearchService } from "@/application/services/searchService";
import { SearchInProjectParams } from "@/domain/search/searchInProjectParams";
import { SearchParams } from "@/domain/search/searchParams";
import { SearchResultResponse } from "@/domain/search/searchResult";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class SearchController
  extends RedmineApiBaseController
  implements SearchService
{
  async search(params: SearchParams): Promise<SearchResultResponse> {
    const query = this.buildSearchQuery(params);
    return this.request<SearchResultResponse>(
      "GET",
      "/search.json",
      query,
      "Search",
    );
  }

  async searchInProject(
    params: SearchInProjectParams,
  ): Promise<SearchResultResponse> {
    const { project_id, ...rest } = params;
    const query = this.buildSearchQuery(rest);
    return this.request<SearchResultResponse>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/search.json`,
      query,
      "Search in project",
    );
  }

  private buildSearchQuery(
    params: Omit<SearchInProjectParams, "project_id">,
  ): Record<string, unknown> {
    const query: Record<string, unknown> = { q: params.q };

    if (params.scope !== undefined) query.scope = params.scope;
    if (params.all_words !== undefined)
      query.all_words = params.all_words ? 1 : 0;
    if (params.titles_only !== undefined)
      query.titles_only = params.titles_only ? 1 : 0;
    if (params.issues !== undefined) query.issues = params.issues ? 1 : 0;
    if (params.news !== undefined) query.news = params.news ? 1 : 0;
    if (params.documents !== undefined)
      query.documents = params.documents ? 1 : 0;
    if (params.changesets !== undefined)
      query.changesets = params.changesets ? 1 : 0;
    if (params.wiki_pages !== undefined)
      query.wiki_pages = params.wiki_pages ? 1 : 0;
    if (params.messages !== undefined) query.messages = params.messages ? 1 : 0;
    if (params.projects !== undefined) query.projects = params.projects ? 1 : 0;
    if (params.offset !== undefined) query.offset = params.offset;
    if (params.limit !== undefined) query.limit = params.limit;

    return query;
  }
}
