import { CreateIssueParams } from "@/domain/issue/createIssueParams";
import { GetIssueParams } from "@/domain/issue/getIssueParams";
import { ListIssuesParams } from "@/domain/issue/listIssuesParams";
import { ListIssuesResult } from "@/domain/issue/listIssuesResult";
import { RedmineIssue } from "@/domain/issue/redmineIssue";
import { UpdateIssueParams } from "@/domain/issue/updateIssueParams";
import { WatcherParams } from "@/domain/issue/watcherParams";

export interface IssueService {
  listIssues(params: ListIssuesParams): Promise<ListIssuesResult>;
  getIssue(params: GetIssueParams): Promise<RedmineIssue>;
  createIssue(params: CreateIssueParams): Promise<RedmineIssue>;
  updateIssue(params: UpdateIssueParams): Promise<void>;
  deleteIssue(params: { id: number }): Promise<void>;
  addWatcher(params: WatcherParams): Promise<void>;
  removeWatcher(params: WatcherParams): Promise<void>;
}
