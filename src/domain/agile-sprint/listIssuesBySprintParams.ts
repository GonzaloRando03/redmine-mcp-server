export interface ListIssuesBySprintParams {
  sprint_id: number;
  project_id?: string | number;
  status_id?: string;
  limit?: number;
  offset?: number;
  sort?: string;
  include?: string;
}
