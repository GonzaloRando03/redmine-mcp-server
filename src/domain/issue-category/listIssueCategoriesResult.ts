import { RedmineIssueCategory } from "@/domain/issue-category/redmineIssueCategory";

export interface ListIssueCategoriesResult {
  issue_categories: RedmineIssueCategory[];
  total_count: number;
}
