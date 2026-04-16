import { BaseUseCase } from "../baseUseCase";
import { RoleService } from "../../services/roleService";
import { ListRolesParams } from "../../../domain/role/listRolesParams";
import { ListRolesResult } from "../../../domain/role/listRolesResult";

export class ListRoles extends BaseUseCase<ListRolesParams, ListRolesResult> {
  constructor(private roleService: RoleService) {
    super();
  }
  async execute(params: ListRolesParams): Promise<ListRolesResult> {
    return this.roleService.listRoles(params);
  }
}
