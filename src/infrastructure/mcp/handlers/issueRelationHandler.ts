import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateIssueRelationParams } from "@/domain/issue-relation/createIssueRelationParams";
import { GetIssueRelationParams } from "@/domain/issue-relation/getIssueRelationParams";
import { ListIssueRelationsParams } from "@/domain/issue-relation/listIssueRelationsParams";

export async function handleIssueRelation(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listIssueRelations"
    | "getIssueRelation"
    | "createIssueRelation"
    | "deleteIssueRelation"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_issue_relations":
      return c.listIssueRelations.handle(
        args as unknown as ListIssueRelationsParams,
      );
    case "get_issue_relation":
      return c.getIssueRelation.handle(
        args as unknown as GetIssueRelationParams,
      );
    case "create_issue_relation":
      return c.createIssueRelation.handle(
        args as unknown as CreateIssueRelationParams,
      );
    case "delete_issue_relation":
      return c.deleteIssueRelation.handle(args as unknown as { id: number });
    default:
      return null;
  }
}
