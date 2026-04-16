import { WikiService } from "@/application/services/wikiService";
import { CreateOrUpdateWikiPageParams } from "@/domain/wiki/createOrUpdateWikiPageParams";
import { DeleteWikiPageParams } from "@/domain/wiki/deleteWikiPageParams";
import { GetWikiPageParams } from "@/domain/wiki/getWikiPageParams";
import { GetWikiPageVersionParams } from "@/domain/wiki/getWikiPageVersionParams";
import { ListWikiPagesParams } from "@/domain/wiki/listWikiPagesParams";
import { ListWikiPagesResult } from "@/domain/wiki/listWikiPagesResult";
import { RedmineWikiPage } from "@/domain/wiki/redmineWikiPage";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class WikiController
  extends RedmineApiBaseController
  implements WikiService
{
  async listWikiPages(
    params: ListWikiPagesParams,
  ): Promise<ListWikiPagesResult> {
    const { project_id } = params;
    return this.request<ListWikiPagesResult>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/wiki/index.json`,
      undefined,
      "List wiki pages",
    );
  }

  async getWikiPage(params: GetWikiPageParams): Promise<RedmineWikiPage> {
    const { project_id, title, include } = params;
    const query: Record<string, unknown> = {};
    if (include && include.length > 0) {
      query.include = include.join(",");
    }
    const raw = await this.request<{ wiki_page: RedmineWikiPage }>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/wiki/${encodeURIComponent(title)}.json`,
      Object.keys(query).length > 0 ? query : undefined,
      "Get wiki page",
    );
    return raw.wiki_page;
  }

  async getWikiPageVersion(
    params: GetWikiPageVersionParams,
  ): Promise<RedmineWikiPage> {
    const { project_id, title, version, include } = params;
    const query: Record<string, unknown> = {};
    if (include && include.length > 0) {
      query.include = include.join(",");
    }
    const raw = await this.request<{ wiki_page: RedmineWikiPage }>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/wiki/${encodeURIComponent(title)}/${encodeURIComponent(version)}.json`,
      Object.keys(query).length > 0 ? query : undefined,
      "Get wiki page version",
    );
    return raw.wiki_page;
  }

  async createOrUpdateWikiPage(
    params: CreateOrUpdateWikiPageParams,
  ): Promise<RedmineWikiPage> {
    const { project_id, title, ...wikiFields } = params;
    const body: Record<string, unknown> = {
      wiki_page: {
        text: wikiFields.text,
        ...(wikiFields.comments !== undefined && {
          comments: wikiFields.comments,
        }),
        ...(wikiFields.parent_title !== undefined && {
          parent_title: wikiFields.parent_title,
        }),
        ...(wikiFields.version !== undefined && {
          version: wikiFields.version,
        }),
      },
    };
    const raw = await this.request<{ wiki_page: RedmineWikiPage }>(
      "PUT",
      `/projects/${encodeURIComponent(project_id)}/wiki/${encodeURIComponent(title)}.json`,
      body,
      "Create or update wiki page",
    );
    // PUT wiki may return 200 with body or 204 with no body
    if (raw === undefined) {
      // Re-fetch the page after update
      return this.getWikiPage({ project_id, title });
    }
    return raw.wiki_page;
  }

  async deleteWikiPage(params: DeleteWikiPageParams): Promise<void> {
    const { project_id, title } = params;
    await this.request(
      "DELETE",
      `/projects/${encodeURIComponent(project_id)}/wiki/${encodeURIComponent(title)}.json`,
      undefined,
      "Delete wiki page",
    );
  }
}
