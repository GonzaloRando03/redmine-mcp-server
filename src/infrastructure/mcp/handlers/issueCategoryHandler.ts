import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateIssueCategoryParams } from "@/domain/issue-category/createIssueCategoryParams";
import { DeleteIssueCategoryParams } from "@/domain/issue-category/deleteIssueCategoryParams";
import { GetIssueCategoryParams } from "@/domain/issue-category/getIssueCategoryParams";
import { ListIssueCategoriesParams } from "@/domain/issue-category/listIssueCategoriesParams";
import { UpdateIssueCategoryParams } from "@/domain/issue-category/updateIssueCategoryParams";

export async function handleIssueCategory(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listIssueCategories"
    | "getIssueCategory"
    | "createIssueCategory"
    | "updateIssueCategory"
    | "deleteIssueCategory"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_issue_categories":
      return c.listIssueCategories.handle(
        args as unknown as ListIssueCategoriesParams,
      );
    case "get_issue_category":
      return c.getIssueCategory.handle(
        args as unknown as GetIssueCategoryParams,
      );
    case "create_issue_category":
      return c.createIssueCategory.handle(
        args as unknown as CreateIssueCategoryParams,
      );
    case "update_issue_category":
      return c.updateIssueCategory.handle(
        args as unknown as UpdateIssueCategoryParams,
      );
    case "delete_issue_category":
      return c.deleteIssueCategory.handle(
        args as unknown as DeleteIssueCategoryParams,
      );
    default:
      return null;
  }
}
