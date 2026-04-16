import { IssueCategoryService } from "@/application/services/issueCategoryService";
import { CreateIssueCategoryParams } from "@/domain/issue-category/createIssueCategoryParams";
import { DeleteIssueCategoryParams } from "@/domain/issue-category/deleteIssueCategoryParams";
import { GetIssueCategoryParams } from "@/domain/issue-category/getIssueCategoryParams";
import { ListIssueCategoriesParams } from "@/domain/issue-category/listIssueCategoriesParams";
import { ListIssueCategoriesResult } from "@/domain/issue-category/listIssueCategoriesResult";
import { RedmineIssueCategory } from "@/domain/issue-category/redmineIssueCategory";
import { UpdateIssueCategoryParams } from "@/domain/issue-category/updateIssueCategoryParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class IssueCategoryController
  extends RedmineApiBaseController
  implements IssueCategoryService
{
  async listIssueCategories(
    params: ListIssueCategoriesParams,
  ): Promise<ListIssueCategoriesResult> {
    const { project_id } = params;
    return this.request<ListIssueCategoriesResult>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/issue_categories.json`,
      undefined,
      "List issue categories",
    );
  }

  async getIssueCategory(
    params: GetIssueCategoryParams,
  ): Promise<RedmineIssueCategory> {
    const raw = await this.request<{
      issue_category: RedmineIssueCategory;
    }>(
      "GET",
      `/issue_categories/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Get issue category",
    );
    return raw.issue_category;
  }

  async createIssueCategory(
    params: CreateIssueCategoryParams,
  ): Promise<RedmineIssueCategory> {
    const { project_id, ...categoryFields } = params;
    const raw = await this.request<{
      issue_category: RedmineIssueCategory;
    }>(
      "POST",
      `/projects/${encodeURIComponent(project_id)}/issue_categories.json`,
      { issue_category: categoryFields },
      "Create issue category",
    );
    return raw.issue_category;
  }

  async updateIssueCategory(params: UpdateIssueCategoryParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/issue_categories/${encodeURIComponent(id)}.json`,
      { issue_category: fields },
      "Update issue category",
    );
  }

  async deleteIssueCategory(params: DeleteIssueCategoryParams): Promise<void> {
    const { id, reassign_to_id } = params;
    const query =
      reassign_to_id !== undefined ? `?reassign_to_id=${reassign_to_id}` : "";
    await this.request(
      "DELETE",
      `/issue_categories/${encodeURIComponent(id)}.json${query}`,
      undefined,
      "Delete issue category",
    );
  }
}
