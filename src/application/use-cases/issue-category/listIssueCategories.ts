import { IssueCategoryService } from "@/application/services/issueCategoryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListIssueCategoriesParams } from "@/domain/issue-category/listIssueCategoriesParams";
import { ListIssueCategoriesResult } from "@/domain/issue-category/listIssueCategoriesResult";

export class ListIssueCategories extends BaseUseCase<
  ListIssueCategoriesParams,
  ListIssueCategoriesResult
> {
  private issueCategoryService: IssueCategoryService;

  constructor(issueCategoryService: IssueCategoryService) {
    super();
    this.issueCategoryService = issueCategoryService;
  }

  override execute(
    params: ListIssueCategoriesParams,
  ): Promise<ListIssueCategoriesResult> {
    return this.issueCategoryService.listIssueCategories(params);
  }
}
