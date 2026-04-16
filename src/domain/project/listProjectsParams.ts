export interface ListProjectsParams {
  offset?: number;
  limit?: number;
  include?: string;
  status?: string;
  id?: string;
  name?: string;
  description?: string;
  parent_id?: string;
  is_public?: string;
  created_on?: string;
  updated_on?: string;
}
