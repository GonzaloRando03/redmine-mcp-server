import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateOrUpdateWikiPageParams } from "@/domain/wiki/createOrUpdateWikiPageParams";
import { DeleteWikiPageParams } from "@/domain/wiki/deleteWikiPageParams";
import { GetWikiPageParams } from "@/domain/wiki/getWikiPageParams";
import { GetWikiPageVersionParams } from "@/domain/wiki/getWikiPageVersionParams";
import { ListWikiPagesParams } from "@/domain/wiki/listWikiPagesParams";

export async function handleWiki(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listWikiPages"
    | "getWikiPage"
    | "getWikiPageVersion"
    | "createOrUpdateWikiPage"
    | "deleteWikiPage"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_wiki_pages":
      return c.listWikiPages.handle(args as unknown as ListWikiPagesParams);
    case "get_wiki_page":
      return c.getWikiPage.handle(args as unknown as GetWikiPageParams);
    case "get_wiki_page_version":
      return c.getWikiPageVersion.handle(
        args as unknown as GetWikiPageVersionParams,
      );
    case "create_or_update_wiki_page":
      return c.createOrUpdateWikiPage.handle(
        args as unknown as CreateOrUpdateWikiPageParams,
      );
    case "delete_wiki_page":
      return c.deleteWikiPage.handle(args as unknown as DeleteWikiPageParams);
    default:
      return null;
  }
}
