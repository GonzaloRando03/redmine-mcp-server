import { AppContainer } from "@/infrastructure/mcp/container";
import { ListIssuePrioritiesParams } from "@/domain/enumeration/listIssuePrioritiesParams";
import { ListTimeEntryActivitiesParams } from "@/domain/enumeration/listTimeEntryActivitiesParams";
import { ListDocumentCategoriesParams } from "@/domain/enumeration/listDocumentCategoriesParams";

export async function handleEnumeration(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    "listIssuePriorities" | "listTimeEntryActivities" | "listDocumentCategories"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_issue_priorities":
      return c.listIssuePriorities.handle(
        args as unknown as ListIssuePrioritiesParams,
      );
    case "list_time_entry_activities":
      return c.listTimeEntryActivities.handle(
        args as unknown as ListTimeEntryActivitiesParams,
      );
    case "list_document_categories":
      return c.listDocumentCategories.handle(
        args as unknown as ListDocumentCategoriesParams,
      );
    default:
      return null;
  }
}
