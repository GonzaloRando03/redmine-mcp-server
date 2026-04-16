import { RedmineApiBaseController } from "./redmineApiBaseController";
import { RoleService } from "../../application/services/roleService";
import { ListRolesParams } from "../../domain/role/listRolesParams";
import { ListRolesResult } from "../../domain/role/listRolesResult";
import { GetRoleParams } from "../../domain/role/getRoleParams";
import { RedmineRole } from "../../domain/role/redmineRole";

export class RoleController
  extends RedmineApiBaseController
  implements RoleService
{
  async listRoles(params: ListRolesParams): Promise<ListRolesResult> {
    return this.request<ListRolesResult>("GET", "/roles.json");
  }
  async getRole(params: GetRoleParams): Promise<RedmineRole> {
    const result = await this.request<{ role: RedmineRole }>(
      "GET",
      `/roles/${params.id}.json`,
    );
    return result.role;
  }
}
