export interface CreateTimeEntryParams {
  issue_id?: number;
  project_id?: string | number;
  hours: number;
  activity_id?: number;
  comments?: string;
  spent_on?: string;
  user_id?: number;
  custom_fields?: { id: number; value: string | string[] }[];
}
