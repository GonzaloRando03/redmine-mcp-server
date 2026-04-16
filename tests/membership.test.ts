import { describe, it, expect, beforeAll } from "vitest";
import { membershipCtrl, projectCtrl, groupCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListProjectMemberships } from "@/application/use-cases/membership/listProjectMemberships";
import { GetMembership } from "@/application/use-cases/membership/getMembership";
import { CreateProjectMembership } from "@/application/use-cases/membership/createProjectMembership";
import { UpdateMembership } from "@/application/use-cases/membership/updateMembership";
import { DeleteMembership } from "@/application/use-cases/membership/deleteMembership";
import { CreateGroup } from "@/application/use-cases/group/createGroup";
import { DeleteGroup } from "@/application/use-cases/group/deleteGroup";

const listProjects = new ListProjects(projectCtrl);
const listProjectMemberships = new ListProjectMemberships(membershipCtrl);
const getMembership = new GetMembership(membershipCtrl);
const createProjectMembership = new CreateProjectMembership(membershipCtrl);
const updateMembership = new UpdateMembership(membershipCtrl);
const deleteMembership = new DeleteMembership(membershipCtrl);
const createGroup = new CreateGroup(groupCtrl);
const deleteGroup = new DeleteGroup(groupCtrl);

describe("Membership", () => {
  let projectId: string | number;
  let memberships: Awaited<
    ReturnType<typeof listProjectMemberships.handle>
  >["memberships"];

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].id;

    const result = await listProjectMemberships.handle({
      project_id: projectId,
      limit: 25,
    });
    memberships = result.memberships;
  });

  it("listProjectMemberships devuelve lista con paginación", async () => {
    const result = await listProjectMemberships.handle({
      project_id: projectId,
      limit: 25,
    });
    expect(result).toHaveProperty("memberships");
    expect(Array.isArray(result.memberships)).toBe(true);
    expect(result).toHaveProperty("total_count");
    expect(result).toHaveProperty("offset");
    expect(result).toHaveProperty("limit");
  });

  it("cada membership tiene id, project y roles", () => {
    for (const m of memberships) {
      expect(m).toHaveProperty("id");
      expect(m).toHaveProperty("project");
      expect(m).toHaveProperty("roles");
      expect(Array.isArray(m.roles)).toBe(true);
    }
  });

  it("getMembership devuelve una membresía por ID", async () => {
    if (memberships.length === 0) return;
    const m = await getMembership.handle({ id: memberships[0].id });
    expect(m).toHaveProperty("id", memberships[0].id);
    expect(m).toHaveProperty("project");
    expect(m).toHaveProperty("roles");
  });

  it("createProjectMembership crea membresía y deleteMembership la elimina", async () => {
    // Crear un grupo temporal para la membresía
    const group = await createGroup.handle({
      name: "Membership test group",
    });

    try {
      // Necesitamos al menos un role_id válido; usamos el de la primera membresía existente
      const roleId =
        memberships.length > 0 && memberships[0].roles.length > 0
          ? memberships[0].roles[0].id
          : 1;

      const created = await createProjectMembership.handle({
        project_id: projectId,
        group_id: group.id,
        role_ids: [roleId],
      });
      expect(created).toHaveProperty("id");
      expect(created).toHaveProperty("roles");

      await deleteMembership.handle({ id: created.id });
    } finally {
      await deleteGroup.handle({ id: group.id });
    }
  });

  it("updateMembership actualiza roles de una membresía", async () => {
    const group = await createGroup.handle({
      name: "Membership update test",
    });

    try {
      const roleId =
        memberships.length > 0 && memberships[0].roles.length > 0
          ? memberships[0].roles[0].id
          : 1;

      const created = await createProjectMembership.handle({
        project_id: projectId,
        group_id: group.id,
        role_ids: [roleId],
      });

      await updateMembership.handle({
        id: created.id,
        role_ids: [roleId],
      });

      const updated = await getMembership.handle({ id: created.id });
      expect(updated.roles.map((r) => r.id)).toContain(roleId);

      await deleteMembership.handle({ id: created.id });
    } finally {
      await deleteGroup.handle({ id: group.id });
    }
  });
});
