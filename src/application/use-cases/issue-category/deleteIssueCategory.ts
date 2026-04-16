import { IssueCategoryService } from "@/application/services/issueCategoryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { DeleteIssueCategoryParams } from "@/domain/issue-category/deleteIssueCategoryParams";

export class DeleteIssueCategory extends BaseUseCase<
  DeleteIssueCategoryParams,
  void
> {
  private issueCategoryService: IssueCategoryService;

  constructor(issueCategoryService: IssueCategoryService) {
    super();
    this.issueCategoryService = issueCategoryService;
  }

  override execute(params: DeleteIssueCategoryParams): Promise<void> {
    return this.issueCategoryService.deleteIssueCategory(params);
  }
}
