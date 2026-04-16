import { CreateIssueCategoryParams } from "@/domain/issue-category/createIssueCategoryParams";
import { DeleteIssueCategoryParams } from "@/domain/issue-category/deleteIssueCategoryParams";
import { GetIssueCategoryParams } from "@/domain/issue-category/getIssueCategoryParams";
import { ListIssueCategoriesParams } from "@/domain/issue-category/listIssueCategoriesParams";
import { ListIssueCategoriesResult } from "@/domain/issue-category/listIssueCategoriesResult";
import { RedmineIssueCategory } from "@/domain/issue-category/redmineIssueCategory";
import { UpdateIssueCategoryParams } from "@/domain/issue-category/updateIssueCategoryParams";

export interface IssueCategoryService {
  listIssueCategories(
    params: ListIssueCategoriesParams,
  ): Promise<ListIssueCategoriesResult>;
  getIssueCategory(
    params: GetIssueCategoryParams,
  ): Promise<RedmineIssueCategory>;
  createIssueCategory(
    params: CreateIssueCategoryParams,
  ): Promise<RedmineIssueCategory>;
  updateIssueCategory(params: UpdateIssueCategoryParams): Promise<void>;
  deleteIssueCategory(params: DeleteIssueCategoryParams): Promise<void>;
}
