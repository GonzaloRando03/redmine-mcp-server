import { IssueService } from "@/application/services/issueService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateIssueParams } from "@/domain/issue/updateIssueParams";

export class UpdateIssue extends BaseUseCase<UpdateIssueParams, void> {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  override execute(params: UpdateIssueParams): Promise<void> {
    return this.issueService.updateIssue(params);
  }
}
