import { IssueService } from "@/application/services/issueService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetIssueParams } from "@/domain/issue/getIssueParams";
import { RedmineIssue } from "@/domain/issue/redmineIssue";

export class GetIssue extends BaseUseCase<GetIssueParams, RedmineIssue> {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  override execute(params: GetIssueParams): Promise<RedmineIssue> {
    return this.issueService.getIssue(params);
  }
}
