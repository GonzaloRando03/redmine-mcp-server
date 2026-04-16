import { AppContainer } from "@/infrastructure/mcp/container";
import { SearchParams } from "@/domain/search/searchParams";
import { SearchInProjectParams } from "@/domain/search/searchInProjectParams";

export async function handleSearch(
  name: string,
  args: Record<string, unknown>,
  c: Pick<AppContainer, "search" | "searchInProject">,
): Promise<unknown> {
  switch (name) {
    case "search":
      return c.search.handle(args as unknown as SearchParams);
    case "search_in_project":
      return c.searchInProject.handle(args as unknown as SearchInProjectParams);
    default:
      return null;
  }
}
