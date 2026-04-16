import { BaseUseCase } from "../baseUseCase";
import { IssueStatusService } from "../../services/issueStatusService";
import { ListIssueStatusesParams } from "../../../domain/issue-status/listIssueStatusesParams";
import { ListIssueStatusesResult } from "../../../domain/issue-status/listIssueStatusesResult";

export class ListIssueStatuses extends BaseUseCase<
  ListIssueStatusesParams,
  ListIssueStatusesResult
> {
  constructor(private issueStatusService: IssueStatusService) {
    super();
  }
  async execute(
    params: ListIssueStatusesParams,
  ): Promise<ListIssueStatusesResult> {
    return this.issueStatusService.listIssueStatuses(params);
  }
}
