export interface ListTimeEntriesParams {
  user_id?: number;
  project_id?: string | number;
  issue_id?: number;
  activity_id?: number;
  spent_on?: string;
  from?: string;
  to?: string;
  offset?: number;
  limit?: number;
}
