import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateIssueParams } from "@/domain/issue/createIssueParams";
import { GetIssueParams } from "@/domain/issue/getIssueParams";
import { ListIssuesParams } from "@/domain/issue/listIssuesParams";
import { UpdateIssueParams } from "@/domain/issue/updateIssueParams";
import { WatcherParams } from "@/domain/issue/watcherParams";

export async function handleIssue(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listIssues"
    | "getIssue"
    | "createIssue"
    | "updateIssue"
    | "deleteIssue"
    | "addWatcher"
    | "removeWatcher"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_issues":
      return c.listIssues.handle(args as unknown as ListIssuesParams);
    case "get_issue":
      return c.getIssue.handle(args as unknown as GetIssueParams);
    case "create_issue":
      return c.createIssue.handle(args as unknown as CreateIssueParams);
    case "update_issue":
      return c.updateIssue.handle(args as unknown as UpdateIssueParams);
    case "delete_issue":
      return c.deleteIssue.handle(args as unknown as { id: number });
    case "add_watcher":
      return c.addWatcher.handle(args as unknown as WatcherParams);
    case "remove_watcher":
      return c.removeWatcher.handle(args as unknown as WatcherParams);
    default:
      return null;
  }
}
