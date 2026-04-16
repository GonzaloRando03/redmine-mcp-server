import { RedmineApiBaseController } from "./redmineApiBaseController";
import { IssueStatusService } from "../../application/services/issueStatusService";
import { ListIssueStatusesParams } from "../../domain/issue-status/listIssueStatusesParams";
import { ListIssueStatusesResult } from "../../domain/issue-status/listIssueStatusesResult";

export class IssueStatusController
  extends RedmineApiBaseController
  implements IssueStatusService
{
  async listIssueStatuses(
    params: ListIssueStatusesParams,
  ): Promise<ListIssueStatusesResult> {
    return this.request<ListIssueStatusesResult>("GET", "/issue_statuses.json");
  }
}
