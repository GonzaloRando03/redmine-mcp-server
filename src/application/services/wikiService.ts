import { CreateOrUpdateWikiPageParams } from "@/domain/wiki/createOrUpdateWikiPageParams";
import { DeleteWikiPageParams } from "@/domain/wiki/deleteWikiPageParams";
import { GetWikiPageParams } from "@/domain/wiki/getWikiPageParams";
import { GetWikiPageVersionParams } from "@/domain/wiki/getWikiPageVersionParams";
import { ListWikiPagesParams } from "@/domain/wiki/listWikiPagesParams";
import { ListWikiPagesResult } from "@/domain/wiki/listWikiPagesResult";
import { RedmineWikiPage } from "@/domain/wiki/redmineWikiPage";

export interface WikiService {
  listWikiPages(params: ListWikiPagesParams): Promise<ListWikiPagesResult>;
  getWikiPage(params: GetWikiPageParams): Promise<RedmineWikiPage>;
  getWikiPageVersion(
    params: GetWikiPageVersionParams,
  ): Promise<RedmineWikiPage>;
  createOrUpdateWikiPage(
    params: CreateOrUpdateWikiPageParams,
  ): Promise<RedmineWikiPage>;
  deleteWikiPage(params: DeleteWikiPageParams): Promise<void>;
}
