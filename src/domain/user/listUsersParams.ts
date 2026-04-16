export interface ListUsersParams {
  offset?: number;
  limit?: number;
  include?: string;
  status?: string;
  name?: string;
  group_id?: string;
  login?: string;
  firstname?: string;
  lastname?: string;
  mail?: string;
  admin?: string;
  auth_source_id?: string;
  twofa_scheme?: string;
  created_on?: string;
  last_login_on?: string;
}
