import { IssueService } from "@/application/services/issueService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateIssueParams } from "@/domain/issue/createIssueParams";
import { RedmineIssue } from "@/domain/issue/redmineIssue";

export class CreateIssue extends BaseUseCase<CreateIssueParams, RedmineIssue> {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  override execute(params: CreateIssueParams): Promise<RedmineIssue> {
    return this.issueService.createIssue(params);
  }
}
