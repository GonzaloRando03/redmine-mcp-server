import { ListIssueStatusesParams } from "../../domain/issue-status/listIssueStatusesParams";
import { ListIssueStatusesResult } from "../../domain/issue-status/listIssueStatusesResult";

export interface IssueStatusService {
  listIssueStatuses(
    params: ListIssueStatusesParams,
  ): Promise<ListIssueStatusesResult>;
}
