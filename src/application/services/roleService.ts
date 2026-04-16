import { ListRolesParams } from "../../domain/role/listRolesParams";
import { ListRolesResult } from "../../domain/role/listRolesResult";
import { GetRoleParams } from "../../domain/role/getRoleParams";
import { RedmineRole } from "../../domain/role/redmineRole";

export interface RoleService {
  listRoles(params: ListRolesParams): Promise<ListRolesResult>;
  getRole(params: GetRoleParams): Promise<RedmineRole>;
}
