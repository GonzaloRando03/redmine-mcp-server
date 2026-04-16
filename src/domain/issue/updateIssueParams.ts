export interface UpdateIssueParams {
  id: number;
  project_id?: number;
  subject?: string;
  tracker_id?: number;
  status_id?: number;
  priority_id?: number;
  description?: string;
  category_id?: number;
  fixed_version_id?: number;
  assigned_to_id?: number;
  parent_issue_id?: number;
  custom_fields?: { id: number; value: string | string[] }[];
  is_private?: boolean;
  estimated_hours?: number;
  done_ratio?: number;
  start_date?: string;
  due_date?: string;
  notes?: string;
  private_notes?: boolean;
  uploads?: {
    token: string;
    filename: string;
    content_type?: string;
    description?: string;
  }[];
}
