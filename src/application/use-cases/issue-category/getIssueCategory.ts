import { IssueCategoryService } from "@/application/services/issueCategoryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetIssueCategoryParams } from "@/domain/issue-category/getIssueCategoryParams";
import { RedmineIssueCategory } from "@/domain/issue-category/redmineIssueCategory";

export class GetIssueCategory extends BaseUseCase<
  GetIssueCategoryParams,
  RedmineIssueCategory
> {
  private issueCategoryService: IssueCategoryService;

  constructor(issueCategoryService: IssueCategoryService) {
    super();
    this.issueCategoryService = issueCategoryService;
  }

  override execute(
    params: GetIssueCategoryParams,
  ): Promise<RedmineIssueCategory> {
    return this.issueCategoryService.getIssueCategory(params);
  }
}
