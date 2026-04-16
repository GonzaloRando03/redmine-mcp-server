import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateNewsParams } from "@/domain/news/createNewsParams";
import { GetNewsParams } from "@/domain/news/getNewsParams";
import { ListAllNewsParams } from "@/domain/news/listAllNewsParams";
import { ListProjectNewsParams } from "@/domain/news/listProjectNewsParams";
import { UpdateNewsParams } from "@/domain/news/updateNewsParams";

export async function handleNews(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    "listAllNews" | "listProjectNews" | "getNews" | "createNews" | "updateNews"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_all_news":
      return c.listAllNews.handle(
        Object.keys(args).length
          ? (args as unknown as ListAllNewsParams)
          : undefined,
      );
    case "list_project_news":
      return c.listProjectNews.handle(args as unknown as ListProjectNewsParams);
    case "get_news":
      return c.getNews.handle(args as unknown as GetNewsParams);
    case "create_news":
      return c.createNews.handle(args as unknown as CreateNewsParams);
    case "update_news":
      return c.updateNews.handle(args as unknown as UpdateNewsParams);
    default:
      return null;
  }
}
