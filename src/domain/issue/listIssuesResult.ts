import { RedmineIssue } from "@/domain/issue/redmineIssue";

export interface ListIssuesResult {
  issues: RedmineIssue[];
  total_count: number;
  offset: number;
  limit: number;
}
