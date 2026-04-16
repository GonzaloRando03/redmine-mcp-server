export interface CreateProjectMembershipParams {
  project_id: string | number;
  user_id?: number;
  group_id?: number;
  role_ids: number[];
}
