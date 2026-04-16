import { IssueCategoryService } from "@/application/services/issueCategoryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateIssueCategoryParams } from "@/domain/issue-category/createIssueCategoryParams";
import { RedmineIssueCategory } from "@/domain/issue-category/redmineIssueCategory";

export class CreateIssueCategory extends BaseUseCase<
  CreateIssueCategoryParams,
  RedmineIssueCategory
> {
  private issueCategoryService: IssueCategoryService;

  constructor(issueCategoryService: IssueCategoryService) {
    super();
    this.issueCategoryService = issueCategoryService;
  }

  override execute(
    params: CreateIssueCategoryParams,
  ): Promise<RedmineIssueCategory> {
    return this.issueCategoryService.createIssueCategory(params);
  }
}
