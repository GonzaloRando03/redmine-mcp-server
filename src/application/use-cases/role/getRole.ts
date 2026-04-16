import { BaseUseCase } from "../baseUseCase";
import { RoleService } from "../../services/roleService";
import { GetRoleParams } from "../../../domain/role/getRoleParams";
import { RedmineRole } from "../../../domain/role/redmineRole";

export class GetRole extends BaseUseCase<GetRoleParams, RedmineRole> {
  constructor(private roleService: RoleService) {
    super();
  }
  async execute(params: GetRoleParams): Promise<RedmineRole> {
    return this.roleService.getRole(params);
  }
}
