export interface UpdateAgileSprintParams {
  project_id: string | number;
  sprint_id: number;
  name?: string;
  start_date?: string;
  end_date?: string;
  status?: string;
  sharing?: string;
}
