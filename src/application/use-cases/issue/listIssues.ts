import { IssueService } from "@/application/services/issueService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListIssuesParams } from "@/domain/issue/listIssuesParams";
import { ListIssuesResult } from "@/domain/issue/listIssuesResult";

export class ListIssues extends BaseUseCase<
  ListIssuesParams,
  ListIssuesResult
> {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  override execute(params: ListIssuesParams): Promise<ListIssuesResult> {
    return this.issueService.listIssues(params);
  }
}
