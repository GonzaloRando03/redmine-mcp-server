export interface RedmineIssueCategory {
  id: number;
  project: { id: number; name: string };
  name: string;
  assigned_to?: { id: number; name: string };
}
