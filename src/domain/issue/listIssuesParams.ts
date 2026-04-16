export interface ListIssuesParams {
  // Pagination
  offset?: number;
  limit?: number;
  // Sorting
  sort?: string;
  // Include related data
  include?: string;
  // Filters
  issue_id?: string;
  project_id?: string | number;
  subproject_id?: string;
  tracker_id?: number;
  status_id?: string;
  priority_id?: number;
  assigned_to_id?: string;
  author_id?: number;
  category_id?: number;
  fixed_version_id?: number;
  parent_id?: number;
  subject?: string;
  created_on?: string;
  updated_on?: string;
  // Custom fields (cf_X)
  [key: string]: unknown;
}
