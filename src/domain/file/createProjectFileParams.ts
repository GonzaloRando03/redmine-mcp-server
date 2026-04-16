export interface CreateProjectFileParams {
  project_id: string | number;
  token: string;
  filename: string;
  description?: string;
  version_id?: number;
}
