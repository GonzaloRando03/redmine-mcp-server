import { IssueService } from "@/application/services/issueService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteIssue extends BaseUseCase<{ id: number }, void> {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.issueService.deleteIssue(params);
  }
}
