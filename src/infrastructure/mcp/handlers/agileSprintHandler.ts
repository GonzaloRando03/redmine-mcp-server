import { AppContainer } from "@/infrastructure/mcp/container";
import { ListAgileSprintsParams } from "@/domain/agile-sprint/listAgileSprintsParams";
import { GetAgileSprintParams } from "@/domain/agile-sprint/getAgileSprintParams";
import { CreateAgileSprintParams } from "@/domain/agile-sprint/createAgileSprintParams";
import { UpdateAgileSprintParams } from "@/domain/agile-sprint/updateAgileSprintParams";
import { GetIssueAgileDataParams } from "@/domain/agile-sprint/getIssueAgileDataParams";
import { AssignIssueToSprintParams } from "@/domain/agile-sprint/assignIssueToSprintParams";
import { ListIssuesBySprintParams } from "@/domain/agile-sprint/listIssuesBySprintParams";

export async function handleAgileSprint(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listAgileSprints"
    | "getAgileSprint"
    | "createAgileSprint"
    | "updateAgileSprint"
    | "deleteAgileSprint"
    | "getIssueAgileData"
    | "assignIssueToSprint"
    | "listIssuesBySprint"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_agile_sprints":
      return c.listAgileSprints.handle(
        args as unknown as ListAgileSprintsParams,
      );
    case "get_agile_sprint":
      return c.getAgileSprint.handle(args as unknown as GetAgileSprintParams);
    case "create_agile_sprint":
      return c.createAgileSprint.handle(
        args as unknown as CreateAgileSprintParams,
      );
    case "update_agile_sprint":
      return c.updateAgileSprint.handle(
        args as unknown as UpdateAgileSprintParams,
      );
    case "delete_agile_sprint":
      return c.deleteAgileSprint.handle(
        args as unknown as { project_id: string | number; sprint_id: number },
      );
    case "get_issue_agile_data":
      return c.getIssueAgileData.handle(
        args as unknown as GetIssueAgileDataParams,
      );
    case "assign_issue_to_sprint":
      return c.assignIssueToSprint.handle(
        args as unknown as AssignIssueToSprintParams,
      );
    case "list_issues_by_sprint":
      return c.listIssuesBySprint.handle(
        args as unknown as ListIssuesBySprintParams,
      );
    default:
      return null;
  }
}
