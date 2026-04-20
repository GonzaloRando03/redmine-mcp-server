export interface CreateAgileSprintParams {
  project_id: string | number;
  name: string;
  start_date?: string;
  end_date?: string;
  status?: string;
  sharing?: string;
}
