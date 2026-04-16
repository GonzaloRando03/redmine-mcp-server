import { AppContainer } from "@/infrastructure/mcp/container";
import { ListRolesParams } from "@/domain/role/listRolesParams";
import { GetRoleParams } from "@/domain/role/getRoleParams";

export async function handleRole(
  name: string,
  args: Record<string, unknown>,
  c: Pick<AppContainer, "listRoles" | "getRole">,
): Promise<unknown> {
  switch (name) {
    case "list_roles":
      return c.listRoles.handle(args as unknown as ListRolesParams);
    case "get_role":
      return c.getRole.handle(args as unknown as GetRoleParams);
    default:
      return null;
  }
}
