import { IssueCategoryService } from "@/application/services/issueCategoryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateIssueCategoryParams } from "@/domain/issue-category/updateIssueCategoryParams";

export class UpdateIssueCategory extends BaseUseCase<
  UpdateIssueCategoryParams,
  void
> {
  private issueCategoryService: IssueCategoryService;

  constructor(issueCategoryService: IssueCategoryService) {
    super();
    this.issueCategoryService = issueCategoryService;
  }

  override execute(params: UpdateIssueCategoryParams): Promise<void> {
    return this.issueCategoryService.updateIssueCategory(params);
  }
}
