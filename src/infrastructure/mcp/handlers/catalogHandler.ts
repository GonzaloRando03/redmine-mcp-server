import { AppContainer } from "@/infrastructure/mcp/container";
import { ListTrackersParams } from "@/domain/tracker/listTrackersParams";
import { ListIssueStatusesParams } from "@/domain/issue-status/listIssueStatusesParams";
import { ListCustomFieldsParams } from "@/domain/custom-field/listCustomFieldsParams";
import { ListQueriesParams } from "@/domain/query/listQueriesParams";

export async function handleCatalog(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    "listTrackers" | "listIssueStatuses" | "listCustomFields" | "listQueries"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_trackers":
      return c.listTrackers.handle(args as unknown as ListTrackersParams);
    case "list_issue_statuses":
      return c.listIssueStatuses.handle(
        args as unknown as ListIssueStatusesParams,
      );
    case "list_custom_fields":
      return c.listCustomFields.handle(
        args as unknown as ListCustomFieldsParams,
      );
    case "list_queries":
      return c.listQueries.handle(args as unknown as ListQueriesParams);
    default:
      return null;
  }
}
