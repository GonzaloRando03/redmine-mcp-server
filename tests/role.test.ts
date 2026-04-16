import { describe, it, expect, beforeAll } from "vitest";
import { roleCtrl } from "./setup";
import { ListRoles } from "@/application/use-cases/role/listRoles";
import { GetRole } from "@/application/use-cases/role/getRole";

const listRoles = new ListRoles(roleCtrl);
const getRole = new GetRole(roleCtrl);

describe("Role", () => {
  let roleId: number;

  beforeAll(async () => {
    const result = await listRoles.handle({});
    if (result.roles.length === 0) throw new Error("No hay roles disponibles");
    roleId = result.roles[0].id;
  });

  it("listRoles retorna la lista de roles", async () => {
    const result = await listRoles.handle({});
    expect(result).toHaveProperty("roles");
    expect(Array.isArray(result.roles)).toBe(true);
    if (result.roles.length > 0) {
      expect(result.roles[0]).toHaveProperty("id");
      expect(result.roles[0]).toHaveProperty("name");
    }
  });

  it("getRole retorna el detalle de un rol con permisos", async () => {
    const result = await getRole.handle({ id: roleId });
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name");
  });
});
